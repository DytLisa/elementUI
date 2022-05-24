import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'
Mock.mock('/home/getData',homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)//新增
Mock.mock(/user\/edit/,'post',userApi.updateUser)//编辑
Mock.mock(/user\/getUser/,'get',userApi.getUserList)//获取
Mock.mock(/user\/del/,'post',userApi.deleteUser)//删除

Mock.mock(/permission\/getMenu/,'post', permissionApi.getMenu)