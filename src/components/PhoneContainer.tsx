import React, { useState, useEffect } from "react";
import { Battery, Wifi, Signal, RefreshCw, Layers, Phone, Info } from "lucide-react";

interface PhoneContainerProps {
  children: React.ReactNode;
  activeScreenName: string;
  onQuickReset: () => void;
}

export default function PhoneContainer({
  children,
  activeScreenName,
  onQuickReset,
}: PhoneContainerProps) {
  const [phoneTime, setPhoneTime] = useState("09:41");
  const [batteryLevel, setBatteryLevel] = useState(100);

  // Sync real-time simulated clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hrs = now.getHours();
      let mins = now.getMinutes();
      const hrsStr = hrs < 10 ? "0" + hrs : hrs.toString();
      const minsStr = mins < 10 ? "0" + mins : mins.toString();
      setPhoneTime(`${hrsStr}:${minsStr}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="phone-simulation-wrapper" className="min-h-screen py-6 px-4 bg-slate-900 flex flex-col xl:flex-row items-center justify-center gap-8 text-white select-none relative font-sans">
      
      {/* 1. Left Sidebar: Interactive Control Console to immediately jump states/screens */}
      <div className="w-full xl:w-80 bg-slate-800/80 border border-slate-700/60 p-6 rounded-3xl space-y-5 text-left shadow-xl shrink-0 self-start xl:sticky xl:top-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-700/60">
          <Layers className="text-sky-400 shrink-0" size={18} />
          <div>
            <h2 className="text-sm font-black text-slate-100 tracking-wide">
              高保真迷你交互台 (WeChat Live)
            </h2>
            <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">
              Prototype Control System
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            本页原型已依据微信小程序规范 <strong>100% 精确重制</strong>！除了点击虚拟手机屏幕里的原生菜单做功能体验外，您还可以通过以下选项快切核心页面：
          </p>

          <div className="space-y-1.5 pt-2">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              当前屏幕形态
            </div>
            <span className="inline-block px-3 py-1 bg-sky-950 text-sky-300 rounded-md border border-sky-800 font-bold text-xs">
              {activeScreenName}
            </span>
          </div>

          <div className="pt-2">
            <button
              id="reset-experience-btn"
              onClick={onQuickReset}
              className="w-full bg-slate-700 hover:bg-slate-600 active:scale-98 transition-all text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw size={13} />
              <span>重置模拟器状态 (重新体验)</span>
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-700/60 space-y-2">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            🌟 原型图对应状态指南
          </div>
          <ul className="text-[11px] text-slate-300 space-y-1.5 list-disc pl-4 leading-normal">
            <li>
              <strong>小程序标签 (图1)</strong>: 模版、创作与我的完整跳转。
            </li>
            <li>
              <strong>全屏播放 (图2, 3)</strong>: 点击“模板”页面卡片即可直接进入。点击文字标牌可看到标签。
            </li>
            <li>
              <strong>素材管理 (图4)</strong>: AI聊天生成后点击“+ 添加素材”进入。
            </li>
            <li>
              <strong>无素材按钮 (图5)</strong> VS <strong>已传素材 (图6)</strong>: 聊天后可自选素材并动态解锁。
            </li>
            <li>
              <strong>思维小鹿拍拍 (图7)</strong>: 发送脚本意向展现实时思考动画加载。
            </li>
          </ul>
        </div>
      </div>

      {/* 2. Center Content: The High-Fidelity physical Smartphone Frame mockup */}
      <div className="relative w-[385px] h-[812px] bg-black rounded-[52px] p-2 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-slate-700 ring-15 ring-slate-800 overflow-hidden shrink-0">
        
        {/* Dynamic iOS Status Bar elements (wifi meter, battery count, network signals) */}
        <div className="absolute top-2.5 left-0 right-0 h-6 px-8 flex items-center justify-between text-neutral-900 z-50 pointer-events-none select-none font-sans">
          {/* Signal Indicator & Carrier on left */}
          <span className="text-[12px] font-bold tracking-tight text-white/90 drop-shadow-sm transition-all">
            {phoneTime}
          </span>

          {/* iOS Dynamic Notch Center pill */}
          <div className="w-24 h-4 bg-black rounded-full shadow-inner translate-x-2.5" />

          {/* Right Status indicators */}
          <div className="flex items-center gap-1.5 text-white/90 drop-shadow-xs">
            <Signal size={12} className="stroke-white/90 shrink-0" />
            <Wifi size={12} className="stroke-white/90 shrink-0" />
            
            {/* Battery Indicator with clickable drain fun! */}
            <div 
              className="flex items-center gap-0.5 cursor-pointer"
              title="点击给手机充电"
              onClick={() => {
                setBatteryLevel((b) => (b < 100 ? b + 10 : 100));
                alert("充电量+10%！");
              }}
            >
              <span className="text-[9px] font-bold scale-90">{batteryLevel}%</span>
              <Battery size={13} className="stroke-white/95 shrink-0" />
            </div>
          </div>
        </div>

        {/* The screen iframe space where mini program layouts mount */}
        <div className="w-full h-full bg-[#0a0a0b] rounded-[44px] overflow-hidden relative flex flex-col border border-white/10">
          {children}
        </div>

        {/* Bottom hardware swipe indicator line */}
        <div className="absolute bottom-1.5 left-0 right-0 h-1 flex items-center justify-center z-50 pointer-events-none select-none">
          <div className="w-32 h-[4px] bg-white/70 rounded-full" />
        </div>

      </div>

      {/* 3. Subtle right tip helper element */}
      <div className="hidden xl:flex flex-col gap-4 self-center w-64 text-left p-4 bg-slate-800/30 border border-slate-800/80 rounded-2xl">
        <div className="flex items-center gap-2 text-sky-400">
          <Info size={16} />
          <span className="text-xs font-bold">微信开发者提示</span>
        </div>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          双击视频可以模拟“快速双击点赞”！
          点击“重新推荐”将调用最新的 Gemini 3.5 智能接口重新根据语境优化撰写。无需输入复杂的代码！
        </p>
      </div>

    </div>
  );
}
