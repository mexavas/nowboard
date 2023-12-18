firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    // Check if user is logged in
    auth.onAuthStateChanged(function(user) {
        const signInLink = document.getElementById("sign-in-link");

        if (user) {

            // User is logged in
            const userEmail = user.email;
            const userName = user.displayName;
            signInLink.removeAttribute("id");
            signInLink.classList.add("profile");
            signInLink.innerText = "";
            signInLink.href = "/user/profile.html";
            // <i class="fas fa-user"></i>
            const icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-user");
            signInLink.appendChild(icon);

            const owner = document.getElementById("owner");
            owner.innerText = userName + "님";
            const logout = document.getElementById("logout");
            logout.innerText = "로그아웃";
            logout.addEventListener('click', function() {
                var userResponse = window.confirm("로그아웃 하시겠습니까?");
                if (userResponse) {
                    auth.signOut();
                    location.reload();
                }
                
            })

        } else {
            // User is not logged in
            signInLink.innerText = "로그인하세요";
            signInLink.href = "./user/login.html"; // Set the login page link
        }
    });