import MLayout from '@/layout/MLayout'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <MLayout>
        <div className='flex flex-col items-center justify-center p-2 text-center' style={{ height: "calc(100vh - 190px)"}}>
            <h1 className='text-5xl text-green-600 font-bold'>Không tìm thấy trang</h1>
            <p className='my-8 text-3xl'>Xin lỗi trang của bạn tìm kiếm không tồn tại.</p>
            <Link href="/" className='underline text-blue-500 text-xl'>Quay lại trang chủ</Link>
        </div>
    </MLayout>
  )
}

export default NotFoundPage