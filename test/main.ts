import initModule, { MainModule } from "./test.js"; // WebAssembly 模块加载入口

// 加载并初始化模块
initModule().then((Module: MainModule) => {
  // 使用 `add` 函数
  const result = Module.add(3, 4);
  console.log(`Result: ${result}`);
});
