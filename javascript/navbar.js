firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    // Check if user is logged in
    auth.onAuthStateChanged(function(user) {
        const signInLink = document.getElementById("sign-in-link");

        if (user) {

            // User is logged in
            const userName = user.displayName;
            signInLink.innerText = '포스터 올리기👆';
            signInLink.href = "./create.html";
            // logout if you user click on this button
            // create a logout anchor tag in footer with id called footer and create that button with id="logout" and  poster-link class
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