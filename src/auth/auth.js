export function check() {
    let userData = sessionStorage.getItem("user")
    if (userData !== null) {
        userData = JSON.parse(userData)
        if (userData.isLogin == true) {
            return true;
        }
    }

    return false;
}

export function loginTemp(data) {
    let userData = {
        isLogin: true,
        mail: data.email
    };

    console.debug("로그인함!")

    sessionStorage.setItem("user", JSON.stringify(userData))
}

export function logoutTemp() {
    sessionStorage.removeItem("user")
}
