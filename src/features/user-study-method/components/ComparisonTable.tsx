import ProcessBar from '@/components/ui/process/ProcessBar'
import type { StudyMethodComparisonType } from '../types/study-type'
import StarEvaluation from '@/components/ui/process/StarEvaluation'

type ComparisonTableProps = {
      dataList: StudyMethodComparisonType[]
}

export default function ComparisonTable({ dataList }: ComparisonTableProps) {
  return (
    <div className='w-full card px-4 py-5 rounded-2xl'>
      <p className='typography-p font-semibold'>So sánh phương pháp hoàn chỉnh</p>
      {/* Wrapper handles scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full typography-p">
          <thead>
            <tr>
              <th className="text-start py-5">Phương pháp</th>
              <th className="text-start py-5">Điểm khớp</th>
              <th className="text-center py-5">Hiệu quả</th>
              <th className="text-start py-5">Thời gian</th>
              <th className="text-start py-5">Độ khó</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data) => (
              <tr key={data.id}>
                <td className="border-t py-3 px-1 font-semibold">{data.name}</td>
                <td className="border-t py-3 px-1">
                  <div className="flex items-center gap-3">
                    <ProcessBar percent={data.weight} variant="success" />
                    <p className="text-[#16A34A] font-semibold">{data.weight}%</p>
                  </div>
                </td>
                <td className="border-t py-3 px-1">
                  <div className="flex justify-center items-center gap-2">
                    <StarEvaluation limitStar={5} dataNumber={data.effectiveness} />
                    <p className="typography-p font-semibold">{data.effectiveness}%</p>
                  </div>
                </td>
                <td className="border-t py-3 px-1">{data.time_info}</td>
                <td className="border-t py-3 px-1">{data.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
