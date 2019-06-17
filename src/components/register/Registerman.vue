<template>
  <div>
    <div class="main pt50 pb54">
      <div class="login_box">
        <form action="https://m.meishij.net/login.php" method="POST">
          <input type="hidden" value="login" name="act">
          <input type="hidden" value="https%3A%2F%2Fm.meishij.net%2Fhtml5%2F" name="redirect">
          <div class="login_box_inputw">
            <input type="text" name="username" value placeholder="手机号/邮箱/用户名">
          </div>
          <div class="login_box_inputw">
            <input type="text" name="rv1" placeholder="验证码">
          </div>
          <div class="login_box_inputw">
            <input type="text" name="password" placeholder="密码">
          </div>
          <input type="hidden" name="wx_uid" value>
          <a href="javascript:$('form').submit();" class="submit">注册</a>
          <a href class="forgetpw">忘记密码？</a>
        </form>
      </div>

      <div class="login_dsf">
        <a
          href="https://i.meishi.cc/connect/index.php?site=qzone&amp;wx_uid=&amp;redirect=https%3A%2F%2Fm.meishij.net%2Fhtml5%2F"
          class="dsf_QQ"
        >QQ登录</a>
        <a
          href="https://i.meishi.cc/connect/index.php?site=sina&amp;wx_uid=&amp;redirect=https%3A%2F%2Fm.meishij.net%2Fhtml5%2F"
          class="dsf_weibo"
        >微博登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.main.pb54 {
  padding-bottom: 54px;
}
.main.pt50 {
  padding-top: 50px;
}
.main {
  width: 100%;
  overflow: hidden;
}
.login_box {
  margin-top: 16px;
  width: 100%;
}
input,
select {
  vertical-align: middle;
}
.login_box .login_box_inputw {
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.login_box .login_box_inputw input {
  height: 44px;
  padding: 10px 16px;
  border: 0px;
  line-height: 24px;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  background: #fdfdfd;
}
.login_box .login_box_inputw {
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}
.login_box .login_box_inputw input {
  height: 44px;
  padding: 10px 16px;
  border: 0px;
  line-height: 24px;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  background: #fdfdfd;
}
.login_box .submit {
  width: 90%;
  background: #ff5151;
  color: #fff;
  line-height: 44px;
  height: 44px;
  margin: 16px auto 0px;
  border-radius: 2px;
  text-align: center;
  font-size: 16px;
  display: block;
}
.login_box .forgetpw {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: #999;
  text-align: center;
  display: block;
}
.login_dsf {
  position: relative;
  text-align: center;
  height: 122px;
  width: 100%;
  margin-top: 25px;
}
.login_dsf a.dsf_QQ {
  background: url(/img/meishitu/QQ_login@3x.png) center top no-repeat;
  background-size: 62px 62px;
}
.login_dsf a.dsf_weibo {
  background: url(/img/meishitu/weibo_login@3x.png) center top no-repeat;
  background-size: 62px 62px;
}
.login_dsf a {
  display: inline-block;
  vertical-align: top;
  width: 62px;
  margin: 0px 15px;
  text-align: center;
  padding-top: 62px;
  line-height: 46px;
  color: #000;
  font-size: 14px;
}
a {
  text-decoration: none;
}
</style>
