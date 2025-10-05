import type { QuestionSectionType } from './types/question-type'

export const methodQuestion: QuestionSectionType[] = [
  {
    id: '1',
    title: 'Phong cách học tập',
    description: 'Bạn thích học và xử lí như thế nào?',
    question: [
      {
        id: '1',
        title: 'Phong cách học tập ưa thích của bạn',
        type: 'single',
        choices: [
          { id: '1', title: 'Thị giác', description: 'Học thông qua hình ảnh, sơ đồ và phương tiện trưc quan.' },
          { id: '2', title: 'Thính giác', description: 'Học thông qua lắng nghe và thảo luận.' },
          { id: '3', title: 'Vận động', description: 'Học thông qua các hoạt động và chuyển động.' },
          { id: '4', title: 'Đọc/Viết', description: 'Học thông qua đọc và viết.' }
        ]
      },
      {
        id: '2',
        title: 'Bạn xử lí thông tin như thế nào ?',
        type: 'single',
        choices: [
          { id: '5', title: 'Tuần tự', description: 'Tiến trình hợp lí, từng bước.' },
          { id: '6', title: 'Toàn diện', description: 'Trước tiên là bức tranh toàn cảnh, sau đó là chi tiết.' },
          { id: '7', title: 'Phân tích', description: 'Chia nhỏ thành các thành phần.' },
          { id: '8', title: 'Trực quan', description: 'Mô hình và kết nối.' }
        ]
      },
      {
        id: '3',
        title: 'Môi trường học tập hợp lý tưởng của bạn là gì ?',
        type: 'single',
        choices: [
          { id: '9', title: 'Yên tĩnh & biệt lập', description: 'Sự yên lặng hoàn toàn, ít phiền nhiều.' },
          { id: '10', title: 'Tiền ồn nền', description: 'Nhạc nhẹ hoặc âm thanh xung quanh.' },
          { id: '11', title: 'Bối cảnh xã hội', description: 'Xung quanh người khác, môi trường hợp tác.' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Khả năng tập trung',
    description: 'Hiểu về các kiểu chú ý và khả năng tập trung của bạn',
    question: [
      {
        id: '4',
        title: 'Bạn thường có thể tập trung trong bao lâu ?',
        type: 'single',
        choices: [
          { id: '12', title: '15 - 25 phút', description: 'Học thông qua hình ảnh, sơ đồ và phương tiện trực quan.' },
          { id: '13', title: '30 - 45 phút', description: 'Khoản chú ý vừa phải.' },
          { id: '14', title: '60 - 90 phút', description: 'Thời gian tập trung kéo dài.' },
          { id: '15', title: 'Thay đổi theo chủ đề', description: 'Tùy thuộc vào mức độ quan tâm.' }
        ]
      },
      {
        id: '5',
        title: 'Khi nào bạn học hiệu quả nhất ?',
        type: 'single',
        choices: [
          { id: '16', title: 'Sáng sớm', description: '5:00 AM - 9:00 AM.' },
          { id: '17', title: 'Buổi sáng', description: '9:00 AM - 12:00 PM.' },
          { id: '18', title: 'Buổi chiều', description: '12:00 PM - 6:00 PM.' },
          { id: '19', title: 'Buổi tối', description: '6:00 PM - 12:00 AM.' }
        ]
      },
      {
        id: '6',
        title: 'Bạn thích làm một việc duy nhất hay nhiều việc cùng lúc ?',
        type: 'single',
        choices: [
          { id: '20', title: 'Thực hiện một nhiệm vụ', description: 'Tập trung vào một việc tại một thời điểm.' },
          { id: '21', title: 'Đa nhiệm', description: 'Làm nhiều việc cùng lúc.' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Thói quen học tập',
    description: 'Mô hình học tập và sở thích hiện tại của bạn',
    question: [
      {
        id: '7',
        title: 'Hiện tại bạn học thường xuyên như thế nào ?',
        type: 'single',
        choices: [
          { id: '22', title: 'Hằng ngày', description: 'Mỗi ngày đều đặn.' },
          { id: '23', title: 'Chỉ các ngày trong tuần', description: 'Thứ 2 đến thứ 6.' },
          { id: '24', title: 'Vài lần 1 tuần', description: '3 - 4 lần 1 tuần.' },
          { id: '25', title: 'Không đều', description: 'Khi tôi có thời gian hoặc cảm thấy có động lực.' }
        ]
      },
      {
        id: '8',
        title: 'Bạn thích thời lượng buổi học nào nhất ?',
        type: 'single',
        choices: [
          { id: '26', title: '30-60 phút', description: 'Phiên họp nhanh chóng tập trung.' },
          { id: '27', title: '1-2 giờ', description: 'Phiên có độ dài vừa phải.' },
          { id: '28', title: '2-4 giờ', description: 'Thời gian học kéo dài.' },
          { id: '29', title: 'Hơn 4 giờ', description: 'Những buổi chạy marathon dài.' }
        ]
      },
      {
        id: '9',
        title: 'Bạn thích nghỉ ngơi theo cách nào ?',
        type: 'single',
        choices: [
          { id: '30', title: 'Nghỉ giải lao ngắn thường xuyên', description: '5-10 phút sau mỗi 25-30 phút.' },
          { id: '31', title: 'Nghỉ giải lao vừa phải', description: '15-20 phút mỗi giờ.' },
          { id: '32', title: 'Nghỉ giải lao dài không thường xuyên', description: '30+ phút sau mỗi 2-3 giờ.' }
        ]
      },
      {
        id: '10',
        title: 'Bạn thường ôn lại những tài liệu đã học trước đó bao lâu 1 lần ?',
        type: 'single',
        choices: [
          { id: '33', title: 'Đánh giá hàng ngày', description: 'Xem lại 1 cái gì đó mỗi ngày.' },
          { id: '34', title: 'Đánh giá hàng tuần', description: 'Dành thời gian mỗi tuần.' },
          { id: '35', title: 'Trước kì thi', description: 'Chỉ khi chuẩn bị cho các bài kiểm tra.' },
          { id: '36', title: 'Hiếm khi', description: 'Không thường xuyên xem lại tài liệu cũ.' }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Động lực & Mục tiêu',
    description: 'Điều gì thúc đẩy bạn và cách bạn xử lý áp lực',
    question: [
      {
        id: '11',
        title: 'Điều gì khúc đẩy bạn nhất ?',
        type: 'single',
        choices: [
          { id: '37', title: 'Sở thích cá nhân', description: 'Tình yêu học hỏi và sự tò mò.' },
          { id: '38', title: 'Thành tích', description: 'Đạt được điểm cao và sự công nhận.' },
          { id: '39', title: 'Mục tiêu nghề nghiệp', description: 'Triển vọng trong công việc trong tương lai và thành công.' },
          { id: '40', title: 'Áp lực bên ngoài', description: 'Kỳ vọng hoặc yêu cầu của gia đình.' }
        ]
      },
      {
        id: '12',
        title: 'Bạn hướng tới mục tiêu hay hướng tới quá trình ?',
        type: 'single',
        choices: [
          { id: '41', title: 'Hướng tới mục tiêu', description: 'Tập trung vào kết quả cuối cùng và thành quả.' },
          { id: '42', title: 'Hướng tới quy trình', description: 'Tận hưởng quá trình học tập.' }
        ]
      },
      {
        id: '13',
        title: 'Bạn thường phản ứng như thế nào với căng thẳng ?',
        type: 'single',
        choices: [
          { id: '43', title: 'Phát triển dưới áp lực', description: 'Thực hiện tốt hơn với thời hạn.' },
          { id: '44', title: 'Quản lí tốt hơn', description: 'Xử lí căng thẳng một cách hợp lí.' },
          { id: '45', title: 'Đấu tranh với căng thẳng', description: 'Căng thẳng tác động tiêu cực đến hiệu suất.' }
        ]
      },
      {
        id: '14',
        title: 'Bạn làm việc theo thời gian như thế nào ?',
        type: 'single',
        choices: [
          { id: '46', title: 'Bắt đầu sớm', description: 'Bắt đầu làm việc trước thời hạn.' },
          { id: '47', title: 'Tiến độ ổn định', description: 'Làm việc nhất quán theo thời gian.' },
          { id: '48', title: 'Phút cuối', description: 'Làm việc tốt nhất dưới áp lực thời gian.' }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Xã hội & Kỹ thuật',
    description: 'Sở thích của bạn về cộng tác và sử dụng công nghệ',
    question: [
      {
        id: '15',
        title: 'Bạn thích học 1 mình hay học cùng người khác ?',
        type: 'single',
        choices: [
          { id: '49', title: 'Nghiên cứu cá nhân', description: 'Học tốt khi ở 1 mình.' },
          { id: '50', title: 'Học nhóm', description: 'Học tốt hơn với người khác.' },
          { id: '51', title: 'Phương pháp tiếp cận hỗn hợp', description: 'Kết hợp cả 2 tùy theo chủ đề.' }
        ]
      },
      {
        id: '16',
        title: 'Bạn muốn nhận phản hồi về tiến độ của mình như thế nào ?',
        type: 'single',
        choices: [
          { id: '52', title: 'Phản hồi ngay lập tức', description: 'Sửa lỗi và hướng dẫn theo thời gian thực.' },
          { id: '53', title: 'Đánh giá định kỳ', description: 'Các buổi phản hồi theo lịch trình thường xuyên.' },
          { id: '54', title: 'Tự đánh giá', description: 'Thích đánh giá sự tiến bộ của bản thân.' }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Những thách thức hiện tại',
    description: 'Xác định những lĩnh vực bạn cần được giúp đỡ nhiều nhất',
    question: [
      {
        id: '17',
        title: 'Những thách thức chính trong học tập của bạn là gì ? (Chọn tất cả các mục phù hợp)',
        type: 'multiple',
        choices: [
          { id: '55', title: 'Kiểm tra sự lo lắng', description: 'Căng thẳng trong kỳ thì và đánh giá.' },
          { id: '56', title: 'Tổ chức', description: 'Giữ cho tài liệu và ghi chú được ngăn nắp.' },
          { id: '57', title: 'Sự trì hoãn', description: 'Trì hoãn các buổi học.' },
          { id: '58', title: 'Hiểu khái niệm', description: 'Khó khăn trong việc nắm bắt các chủ đề phức tạp.' },
          { id: '59', title: 'Duy trì sự tập trung', description: 'Dễ bị phân tâm.' },
          { id: '60', title: 'Lưu trữ thông tin', description: 'Quên mất những gì đã học.' },
          { id: '61', title: 'Duy trì động lực', description: 'Mất hứng thú hoặc mất động lực.' },
          { id: '62', title: 'Quản lý thời gian', description: 'Không đủ thời gian hoặc lập kế hoạch kém.' }
        ]
      },
      {
        id: '18',
        title: 'Bạn thực sự có thể dành bao nhiêu thời gian để học mỗi ngày ?',
        type: 'single',
        choices: [
          { id: '63', title: '30-60 phút', description: 'Lịch trình rất bận rộn.' },
          { id: '64', title: '1-2 giờ', description: 'Một thời gian có sẵn.' },
          { id: '65', title: '2-4 giờ', description: 'Khoảng thời gian hợp lý.' },
          { id: '66', title: 'Hơn 4 giờ', description: 'Lịch trình rất linh hoạt.' }
        ]
      },
      {
        id: '19',
        title: 'Bạn đánh giá mức độ khó của các môn học hiện tại của mình như thế nào ?',
        type: 'single',
        choices: [
          { id: '67', title: 'Chủ yếu là dễ dàng', description: 'Thoải mái với hầu hết các chất liệu.' },
          { id: '68', title: 'Thách thức vừa phải', description: 'Một số khái niệm khó.' },
          { id: '69', title: 'Rất thách thức', description: 'Đang vật lộn với hầu hết các tài liệu.' }
        ]
      }
    ]
  }
]
