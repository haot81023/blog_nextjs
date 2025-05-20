import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <div className="flex flex-col px-5 py-2 justify-center">
      <div className="flex flex-row justify-center gap-4 py-3 flex-wrap">
        {/* Panel 1 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Sản phẩm</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Chúng tôi cung cấp các sản phẩm phần mềm tối ưu, dễ sử dụng và phù hợp với mọi doanh nghiệp từ nhỏ đến lớn.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Panel 2 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Dịch vụ</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Chúng tôi cung cấp dịch vụ phát triển phần mềm theo yêu cầu, tư vấn giải pháp CNTT và bảo trì hệ thống.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Panel 3 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Về chúng tôi</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Chúng tôi là một nhóm đam mê công nghệ, luôn tìm cách đổi mới và tạo ra giá trị cho cộng đồng thông qua phần mềm.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="flex flex-row justify-center gap-4 py-3 flex-wrap">
        {/* Panel 4 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Khách hàng</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Hơn 500 doanh nghiệp đã tin tưởng và sử dụng dịch vụ của chúng tôi trong nhiều năm qua.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Panel 5 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Liên hệ</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Email: contact@company.com<br />
                Hotline: 0123 456 789
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Panel 6 */}
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold text-xl">Tuyển dụng</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 text-center">
              <p>
                Chúng tôi luôn tìm kiếm nhân tài để đồng hành cùng sự phát triển của công ty. Hãy gia nhập ngay!
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
