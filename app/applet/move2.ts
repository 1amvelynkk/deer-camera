import fs from 'fs';

const content = fs.readFileSync('src/components/KeyframesTab.tsx', 'utf-8');

const strWatermarkStart = `{activeCategory === "水印元素" && (`;
const idxWatermarkStart = content.indexOf(strWatermarkStart);

const targetGridStart = `            {/* Live miniature template choices grid */}`;
const idxWatermarkEnd = content.indexOf(targetGridStart);

const watermarkBlock = content.slice(idxWatermarkStart, idxWatermarkEnd);

const strSloganStart = `{activeCategory === "营销口号" && (`;
const idxSloganStart = content.indexOf(strSloganStart);

const targetSloganEnd = `          </>\n        ) : (` ;
const idxSloganEnd = content.indexOf(targetSloganEnd);
if (idxSloganEnd === -1) {  console.error("slogan end not found", content.substring(idxSloganStart, idxSloganStart + 100)); }

const sloganBlock = content.slice(idxSloganStart, idxSloganEnd);


let newContent = content.slice(0, idxWatermarkStart) + content.slice(idxWatermarkEnd, idxSloganStart) + content.slice(idxSloganEnd);

const insertPoint = newContent.indexOf(`{internalTab === "library" ? (`);

newContent = newContent.slice(0, insertPoint) + watermarkBlock + sloganBlock + newContent.slice(insertPoint);

fs.writeFileSync('src/components/KeyframesTab.tsx', newContent, 'utf-8');
console.log("Done");
