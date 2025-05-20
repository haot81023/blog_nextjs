
import Image from "next/image";
export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-6 w-full min-h-screen max-w-screen-xl mx-auto">
            <div className="w-full flex justify-center">
                <Image
                    src="/caulong.png"
                    alt="Giới thiệu"
                    width={900}
                    height={500}
                    className="w-full max-w-[900px] h-auto"
                />
            </div>

            <h1 className="text-4xl font-bold mt-6">Giới thiệu về chúng tôi</h1>

            <p className="mt-6 text-lg max-w-3xl">
                Chúng tôi là một nhóm đam mê công nghệ, chuyên cung cấp các giải pháp phần mềm sáng tạo và hiệu quả.
                Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao và dịch vụ tốt nhất.
            </p>
            <p className="mt-4 text-lg max-w-3xl">
                Đội ngũ của chúng tôi bao gồm các chuyên gia trong nhiều lĩnh vực khác nhau, từ phát triển phần mềm đến thiết kế giao diện người dùng.
                Chúng tôi luôn sẵn sàng lắng nghe và đáp ứng nhu cầu của khách hàng để tạo ra những sản phẩm phù hợp nhất với họ.
            </p>
        </div>


    )
};
