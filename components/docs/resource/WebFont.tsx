"use client";

import { motion } from "motion/react";

const NativeFontDemo = () => {
  return (
    <motion.div
      className="card flex flex-col items-center justify-center text-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-semibold">使用原生系统字体优化</h1>
      <p className="text-lg mt-4">
        This text uses the native system font, which is already optimized for
        font loading speed.
        <hr />
        这里使用的是原生系统字体，已经优化了字体加载速度。
      </p>
    </motion.div>
  );
};

const PreloadFontDemo = () => {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/custom-font.woff2"
        as="font"
        type="font/woff2"
      />
      <motion.div
        className="flex flex-col items-center justify-center card text-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-semibold">使用字体预加载优化</h1>
        <p className="text-lg mt-4 font-demo">
          This text uses a custom font that is preloaded with the &lt;link
          rel=&quot;preload&quot;&gt; tag, which optimizes the font loading
          speed.
          <hr />
          上面使用的了预加载字体文件，从而优化了字体加载速度。
        </p>
      </motion.div>
    </>
  );
};

export { PreloadFontDemo, NativeFontDemo };
