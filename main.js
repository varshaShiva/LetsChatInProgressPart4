
function loginButton()
{
    user_name=document.getElementById("userName").value;
    localStorage.setItem("user_name",user_name);
    window.location="letsChatMain.html";
}