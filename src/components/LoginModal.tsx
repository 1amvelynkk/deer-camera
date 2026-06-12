import React, { useState } from "react";
import { Check, Hexagon, X } from "lucide-react";

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
  triggerToast: (msg: string) => void;
}

export default function LoginModal({ onClose, onLoginSuccess, triggerToast }: LoginModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const [showWeChatAuth, setShowWeChatAuth] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const [hasPrivacyError, setHasPrivacyError] = useState(false);

  const triggerShakeError = () => {
    setHasPrivacyError(true);
    setShakeError(true);
    setTimeout(() => setShakeError(false), 500);
  };

  const handleLogin = () => {
    if (!privacyAgreed) {
      triggerShakeError();
      return;
    }
    if (step === 2 && (!phone || !verificationCode)) {
      triggerToast("⚠️ 请输入手机号和验证码");
      return;
    }
    triggerToast("✅ 登录成功");
    onLoginSuccess();
  };

  const OneClickLogin = () => {
    if (!privacyAgreed) {
      triggerShakeError();
      return;
    }
    triggerToast("✅ 登录成功");
    onLoginSuccess();
  };

  return (
    <>
      <style>{`
        @keyframes shakeAction {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .shake-animation {
          animation: shakeAction 0.3s ease-in-out;
        }
      `}</style>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-[100] flex items-center justify-center select-none login-modal-content px-5">
      <div className="bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.05)] border border-white/60 rounded-[28px] w-full max-w-[320px] relative flex flex-col items-center py-8">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 bg-neutral-900/60 hover:bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 transition-colors"
        >
          <X size={14} strokeWidth={2.5} />
        </button>

        {/* Top Logo Section */}
        <div className="mt-2 mb-8 flex items-center justify-center gap-3">
          <div className="relative flex items-center justify-center">
             <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M24 6L42 16.3923V35.6077L24 46L6 35.6077V16.3923L24 6Z" fill="#1890FF"/>
                <path d="M24 6V26L42 16.3923V35.6077L24 6Z" fill="#0050B3" fillOpacity="0.3"/>
                <path d="M6 16.3923L24 26V46L6 35.6077V16.3923Z" fill="#0050B3" fillOpacity="0.5"/>
                <path d="M14 21L24 27L34 21L24 15L14 21Z" fill="white"/>
             </svg>
          </div>
          <span className="text-[20px] font-bold text-neutral-900 tracking-wider">登录</span>
        </div>

        {/* Main Content Container */}
        <div className="w-full flex flex-col items-center px-6">
          
          {step === 1 ? (
            <div className="w-full flex flex-col items-center">
              <button 
                onClick={OneClickLogin}
                className="w-full bg-[#3b82f6] text-white py-3 rounded-[20px] font-medium text-[15px] shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform"
              >
                一键登录
              </button>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-white/40 border border-white/50 text-neutral-700 py-3 rounded-[20px] font-medium text-[15px] mt-3 active:scale-[0.98] transition-all hover:bg-white/60"
              >
                手机号登录
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-white/40 border border-white/50 text-neutral-700 py-3 rounded-[20px] font-medium text-[15px] mt-3 active:scale-[0.98] transition-all hover:bg-white/60"
              >
                暂不登录
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              {/* Input Form */}
              <div className="w-full space-y-2 mb-3">
                <div className="w-full border-b border-neutral-300">
                  <input 
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="请输入手机号码"
                    className="w-full py-3 bg-transparent outline-none text-neutral-800 text-[14px] placeholder-gray-400"
                  />
                </div>
                <div className="w-full border-b border-neutral-300 flex items-center justify-between">
                  <input 
                    type="text"
                    value={verificationCode}
                    onChange={e => setVerificationCode(e.target.value)}
                    placeholder="请输入验证码"
                    className="w-full py-3 bg-transparent outline-none text-neutral-800 text-[14px] placeholder-gray-400 flex-1"
                  />
                  <button 
                    onClick={() => {
                      if(!phone) {
                        triggerToast("⚠️ 请输入手机号码");
                        return;
                      }
                      triggerToast("已发送验证码");
                    }}
                    className="text-gray-300 text-[14px] font-normal shrink-0 px-2 active:opacity-70"
                  >
                    获取验证码
                  </button>
                </div>
              </div>

              {/* Forgot / Password Row */}
              <div className="w-full flex items-center justify-between mb-6 px-1">
                <button className="text-[#3b82f6] text-[12px] font-medium">忘记密码</button>
                <button className="text-[#3b82f6] text-[12px] font-medium">密码登录</button>
              </div>

              <button 
                onClick={handleLogin}
                className="w-full bg-[#3b82f6] text-white py-3 rounded-[20px] font-medium text-[15px] shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform"
              >
                登录
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-white/40 border border-white/50 text-neutral-700 py-3 rounded-[20px] font-medium text-[15px] mt-3 active:scale-[0.98] transition-all hover:bg-white/60"
              >
                暂不登录
              </button>
            </div>
          )}

          {/* Checkbox row */}
          <div className={`flex items-center gap-2 mt-6 w-full justify-center text-center transition-transform ${shakeError ? 'shake-animation' : ''}`}>
            <div 
              onClick={() => {
                setPrivacyAgreed(!privacyAgreed);
                if (!privacyAgreed) setHasPrivacyError(false);
              }}
              className={`w-3.5 h-3.5 shrink-0 rounded-[3px] flex items-center justify-center cursor-pointer transition-colors ${
                privacyAgreed ? "bg-blue-600 border-none" : (hasPrivacyError ? "border-red-500 border-[1.5px] bg-red-50" : "border border-gray-400")
              }`}
            >
              {privacyAgreed && <Check size={10} strokeWidth={3} className="text-white" />}
            </div>
            <span 
              className={`text-[10px] cursor-pointer transition-colors ${hasPrivacyError ? 'text-red-500 font-medium' : 'text-neutral-600 font-medium'}`}
              onClick={() => {
                setPrivacyAgreed(!privacyAgreed);
                if (!privacyAgreed) setHasPrivacyError(false);
              }}
            >
              已阅读并同意 <span className={`transition-colors ${hasPrivacyError ? 'text-red-500 font-medium' : 'text-blue-600 font-medium'}`}>《链企隐私政策》</span> 和 <span className={`transition-colors ${hasPrivacyError ? 'text-red-500 font-medium' : 'text-blue-600 font-medium'}`}>《链企用户协议》</span>
            </span>
          </div>

          {/* Step 2 Additional Elements */}
          {step === 2 && (
             <div className="w-full flex flex-col items-center mt-6">
                <div className="flex items-center justify-center w-full gap-3 mb-4">
                   <div className="h-px bg-gray-200 flex-1"></div>
                   <span className="text-[10px] text-neutral-600 font-medium">其他登录方式</span>
                   <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <button 
                  onClick={() => setShowWeChatAuth(true)}
                  className="px-4 py-1.5 rounded-full border border-neutral-300 bg-white/50 text-[11px] text-neutral-700 mb-5 active:bg-neutral-100 transition-colors"
                >
                  手机号快捷登录
                </button>
             </div>
          )}

        </div>

      </div>

      {/* WeChat Auth Bottom Sheet */}
      {showWeChatAuth && (
        <div className="absolute inset-0 z-[110] flex flex-col justify-end login-modal-content">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setShowWeChatAuth(false)} />
          <div className="relative bg-gradient-to-t from-[#ffffff]/90 to-[#ffffff]/70 backdrop-blur-3xl shadow-[0_-16px_40px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] border-t border-white/60 rounded-t-[32px] p-6 w-full pb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6L42 16.3923V35.6077L24 46L6 35.6077V16.3923L24 6Z" fill="#fff"/>
                 </svg>
              </div>
              <h3 className="text-[17px] font-bold text-neutral-900">小鹿拍拍申请获取：</h3>
            </div>
            <div className="mb-10 pl-11">
              <p className="text-[16px] font-bold text-neutral-900 mb-1">你的手机号</p>
              <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                 <div className="flex items-center gap-2">
                    <span className="text-neutral-900 font-medium">138****0000</span>
                    <span className="text-[10px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded">微信绑定号码</span>
                 </div>
                 <Check size={18} strokeWidth={3} className="text-[#05C160]" />
              </div>
              <button className="text-blue-500 text-[13px] font-medium mt-4">使用其他手机号</button>
            </div>
            
            <div className="flex items-center justify-between gap-4">
               <button 
                 onClick={() => setShowWeChatAuth(false)}
                 className="flex-1 py-3.5 bg-neutral-100 text-neutral-700 font-medium rounded-[12px] active:bg-gray-200 transition-colors shadow-sm"
               >
                 拒绝
               </button>
               <button 
                 onClick={() => {
                   if (!privacyAgreed) {
                     triggerShakeError();
                     setShowWeChatAuth(false);
                     return;
                   }
                   setShowWeChatAuth(false);
                   triggerToast("✅ 授权登录成功");
                   onLoginSuccess();
                 }}
                 className="flex-1 py-3.5 bg-[#05C160] text-white font-medium rounded-[12px] active:bg-[#06ad56] transition-colors shadow-md shadow-[#05C160]/20"
               >
                 允许
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
    </>
  );
}
