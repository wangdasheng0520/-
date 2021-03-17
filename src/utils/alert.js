import Vue from 'vue'
const vu = new Vue()


// 成功时弹出消息提示
export const successAlert = (mes) => {
  vu.$message({
    showClose: true,
    message: mes,
    type: 'success'
  });
}

// 警告时弹出消息提示  
export const warningAlert = (mes) => {
  vu.$message({
    showClose: true,
    message: mes,
    type: 'warning'
  })
}


// 错误弹出消息提示
export const ErrorAlert = (mes) => {
  vu.$message({
    showClose: true,
    message: mes,
    type: 'error'
  })
}
