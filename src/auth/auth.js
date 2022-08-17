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

export function getUserProfile() {
    if (check()) {
        let userData = sessionStorage.getItem("user")
        console.debug("유저데이터", userData)
        return JSON.parse(userData)
    } else {
        return {
            member_no: 0,
            name: ''
        }
    }
}

export function loginTemp(data) {
    let userData = {
        isLogin: true,
        mail: data.email,
        member_no: data.pk_member_no,
        name: data.name
    };

    console.debug("로그인함!")

    sessionStorage.setItem("user", JSON.stringify(userData))
}

export function logoutTemp() {
    sessionStorage.removeItem("user")
}
