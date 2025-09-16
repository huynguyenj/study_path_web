import { CalendarMonthIcon, EmailIcon, LibraryBooksIcon, QuizIcon, SchoolIcon } from '@/assets/icons/mui-icon'
import Section2Card from './Section2Card'

export default function Section2() {
  return (
    <div className="relative bg-blue-400 dark:bg-white  py-15 flex flex-col justify-center items-center gap-5 ">
      {/* Left side */}
      <div className="sticky top-30">
        <h2 className="typography-h2 text-white text-center dark:text-black uppercase font-bold">
                  Làm sao để sử dụng dịch vụ của chúng tôi đúng cách ?
        </h2>
      </div>
      {/* Right side (scroll content) */}
      <div className="w-[60%] flex flex-col gap-5">
            <Section2Card title="Đăng ký tài khoản" top={( 1* 30 + 170)} icon={EmailIcon}/>
            <Section2Card title="Làm bài test để tìm phương pháp học hiệu quả" top={( 2* 30 + 170)} icon={QuizIcon}/>
            <Section2Card top={( 3* 30 + 170)} title="Nhập thông tin để hệ thống tạo lịch học dành riêng cho bạn" icon={CalendarMonthIcon}/>
            <Section2Card top={( 4* 30 + 170)} title="Làm kiểm tra để đơn giản chỉ việc nhập thông tin và AI sẽ tạo bài kiểm tra phù hợp" icon={SchoolIcon}/>
            <Section2Card top={( 5* 30 + 170)} title="Khám phá các khóa học có sẵn trên hệ thống" icon={LibraryBooksIcon}/>  
      </div>
    </div>
  )
}
