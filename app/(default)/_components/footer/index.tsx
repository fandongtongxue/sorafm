import Social from "../social";

export default function () {
  return (
    <section>
      <div className="w-screen flex-col bg-black px-6 py-20 text-white lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a href="https://sora.xiaobingkj.com" className="inline-block max-w-full">
              SoraAI
            </a>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              Sora AI 视频生成
            </p>
            <div className="mb-8 mt-6 flex flex-row">
              <Social />
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">介绍</div>
              <a
                href="https://openai.com/sora"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora是什么？
              </a>
              <a
                href="https://platform.openai.com/docs/overview"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora API
              </a>
              <a
                href="https://www.tiktok.com/@openai"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora 视频示例
              </a>
              <a
                href="https://platform.openai.com/docs/guides/prompt-engineering"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Sora 提示词
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">我们的产品</div>
              <a
                href="https://giteer.app.xiaobingkj.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Giteer For 码云
              </a>
              <a
                href="https://screencase.app.xiaobingkj.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                屏幕套壳
              </a>
              <a
                href="https://subscribe.app.xiaobingkj.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                订阅酱
              </a>
              <a
                href="https://cloud.app.xiaobingkj.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                集云
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">信任</div>
              <a
                href="https://sora.xiaobingkj.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                SoraAI
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:mt-0">
            <div className="mb-4 flex flex-col items-center">
              <p className="font-inter font-medium text-black"></p>
              <p className="font-inter ml-4 text-black">
                <img
                  src={
                    "https://raw.githubusercontent.com/fandongtongxue/sorafm/main/qrcode_for_gh_ea31060c8dbb_258.jpg"
                  }
                  alt="qrcode"
                  width={"200"}
                  height={"200"}
                  className="rounded-md"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-gray-800 lg:my-20"></div>
        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2024.{" "}
            <a href="https://sora.xiaobingkj.com" target="_blank" className="text-primary">
              范小兵
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
