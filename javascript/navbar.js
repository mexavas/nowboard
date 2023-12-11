firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    // Check if user is logged in
    auth.onAuthStateChanged(function(user) {
        const signInLink = document.getElementById("sign-in-link");

        if (user) {
            // User is logged in
            const userName = user.displayName;
            signInLink.innerText = userName + '님👋';
            signInLink.href = "#";
            // logout if you user click on this button
            signInLink.addEventListener('click', function() {
                auth.signOut();
                alert("로그아웃 되었습니다.");
                location.reload();
            });
        } else {
            // User is not logged in
            signInLink.innerText = "로그인하세요";
            signInLink.href = "./user/login.html"; // Set the login page link
        }
    });