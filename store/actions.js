// 触发改变 state方法 封装函数调用 mutations
export const setIsAuthenticated = ({commit},data) =>{
	commit('setIsAuthenticated',data)
}
export const setUser = ({commit},data) =>{
	commit('setUser',data)
}
export const setOpenId = ({commit},data) =>{
	commit('setOpenId',data)
}
export const setlessonInfo = ({commit},data) =>{
	commit('setlessonInfo',data)
}
