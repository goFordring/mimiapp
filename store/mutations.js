// 改变 state 的方法
export const setIsAuthenticated = (state,data) =>{
	state.isAuthenticated = data;
}
export const setUser = (state,data) =>{
	state.user = data;
}
export const setOpenId = (state,data) =>{
	state.openId = data;
}
export const setlessonInfo = (state,data) =>{
	state.lessonInfo = data;
}
