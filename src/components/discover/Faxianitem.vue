<template>
  <div>
    <div class="iitem">
      <div class="i_t">热门的视频菜谱</div>
      <span class="i_tag">视频菜谱</span>

      <!-- 文章类型 -->
      <div class="videoitem">
        <a href="https://m.meishij.net/html5/video_detail.php?id=2" class="author">
          <img
            src="http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg"
          >
          <span>日食记</span>
          <em>2017-05-31更新</em>
        </a>
        <div class="imgw">
          <a
            href="http://api.meishi.cc/v5/ykPlayer.php?vid=XMjc5MTk0MjM4OA==&amp;sid=3397&amp;udid=&amp;user_id="
          >
            <img
              src="http://admin.meishi.cc/article/upload/video_img/20170531/20170531174704_320.png"
            >
            <div class="info">
              <strong>看一遍就能学会的泡椒凤爪 骨头都想吞掉</strong>
              <em>467310次播放</em>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="iitem">
      <div class="i_t">全国最爱收藏的菜谱</div>
      <span class="i_tag">收藏最多</span>

      <!-- 文章类型 -->
      <div class="ic_style3">
        <a name="recipe" recipe_id="1678584" href="https://m.meishij.net/html5/news.php?id=1678584">
          <img
            src="http://site.meishij.net/r/67/36/4071567/a4071567_146332089441623.jpg"
            class="scimg"
          >
          <div class="cpinfo">
            <strong class="cpname">酸菜鱼</strong>
            <div class="stars">
              <img class="starimg" src="https://s1.c.meishij.net/wap7/images/all_star_h@3x.png">

              <img class="starimg" src="https://s1.c.meishij.net/wap7/images/all_star_h@3x.png">

              <img class="starimg" src="https://s1.c.meishij.net/wap7/images/all_star_h@3x.png">

              <img class="starimg" src="https://s1.c.meishij.net/wap7/images/all_star_h@3x.png">

              <img class="starimg" src="https://s1.c.meishij.net/wap7/images/all_star_h@3x.png">
            </div>
            <span class="cp_info1">15步 / &lt;30分钟</span>
            <span class="cp_info2">香辣味 / 煮</span>
          </div>
        </a>
      </div>

      <!-- 食话类型 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.iitem {
  background: #fefefe;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
}
.i_t {
  padding: 2px 3.125% 0px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
}
.i_tag {
  display: inline-block;
  vertical-align: top;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  color: #01a1ea;
  border: 1px solid #01a1ea;
  border-radius: 2px;
  margin-left: 3.125%;
  padding: 0px 4px;
}
.videoitem {
  padding: 10px 3.125%;
}
.videoitem .author {
  height: 30px;
  margin-bottom: 10px;
  display: block;
  position: relative;
}
.videoitem .author img {
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  float: left;
}
.videoitem .author span {
  line-height: 30px;
  font-size: 14px;
  color: #333;
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
}
.videoitem .author em {
  display: block;
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 0px;
  font-size: 10px;
  color: #999;
  top: 0px;
}
.videoitem .imgw {
  width: 100%;
  position: relative;
}
a {
  text-decoration: none;
}
a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
.videoitem .imgw img {
  display: block;
  width: 100%;
}
.videoitem .imgw .info {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: url(../../../public/img/meishitu/video_cover_jianbian@3x.png)
    center no-repeat;
  background-size: 100% 100%;
}
.videoitem .imgw .info strong {
  color: #fff;
  line-height: 24px;
  font-size: 16px;
  position: absolute;
  left: 14px;
  bottom: 32px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
}
.videoitem .imgw .info em {
  color: #fff;
  line-height: 24px;
  font-size: 10px;
  position: absolute;
  left: 14px;
  bottom: 10px;
}
.videoitem .imgw .info span {
  display: block;
  height: 30px;
  width: 40px;
  position: absolute;
  right: 14px;
  bottom: 20px;
  background: url(../../../public/img/meishitu/video_list@3x.png) center
    no-repeat;
  background-size: 100% 100%;
}
.ic_style3 {
  width: 93.75%;
  margin: 0px auto;
  padding-top: 10px;
  padding-bottom: 12px;
}
a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
.scimg {
  width: 30%;
  display: inline-block;
  vertical-align: top;
}
.cpinfo {
  width: 70%;
  padding-left: 10px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  box-sizing: border-box;
}
.cpinfo .cpname {
  font-size: 15px;
  color: #333;
  line-height: 23px;
  display: block;
  height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.starimg {
  display: inline-block;
  vertical-align: top;
  height: 14px;
  width: 14px;
  margin-right: 3px;
}
.cp_info1 {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  padding-left: 16px;
  background: url(../../../public/img/meishitu/cp_con_icon_sj@3x.png) 0px 3px
    no-repeat;
  display: block;
  background-size: 14px 14px;
}
.cp_info2 {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  padding-left: 16px;
  background: url(../../../public/img/meishitu/cp_con_icon_kw@3x.png) 0px 3px
    no-repeat;
  display: block;
  background-size: 14px 14px;
}
</style>

