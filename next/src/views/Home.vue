<template>
  <div class="view--home">
    <div class="hero">
      <div class="hero__content">
        <div class="hero__header">
          <h1>Derek Surguy</h1>
        </div>
        <div class="hero__subheader">
          <h2>Modern Front-End Software &amp; Websites</h2>
        </div>
      </div>
      <div class="hero__gradient"></div>
    </div>
    <div class="body">
      <div class="intro">
        <div class="intro__text">
          <p>
            Hi! I'm Derek Surguy. I'm a front-end software engineer with 10 years of experience in web development. I use modern technologies like NodeJS and Vue to create innovative, intuitive and performant applications.
          </p>
          <p>
            I have a passion for helping others realize their goals, and strive to enable the users of my software to be more efficient and discover new ways to use their technology.
          </p>
        </div>
        <div class="intro__image">
          <img src="@/assets/face.jpg" />
        </div>
      </div>
      <div class="separator"></div>
      <div class="connect">
        <div class="connect__text">
          Connect with me on any of these services
        </div>
      </div>
      <CopyLink 
        v-for="link in copyLinks"
        :key="link.href"
        :link-prefix="link.linkPrefix"
        :href="link.href"
        :icon="link.icon"
      />
    </div>
  </div>
</template>

<style scoped>
.view--home {
  font-family: 'Mukta', 'sans-serif';
  background-color: #0C1A1D;
  color: #fff;
  padding-bottom: 200px;
}
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~@/assets/hero.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.hero__gradient {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: rgb(12,26,29);
  background: -moz-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  background: linear-gradient(180deg, rgba(12,26,29,0) 0%, rgba(12,26,29,1) 50%, rgba(12,26,29,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c1a1d",endColorstr="#0c1a1d",GradientType=1);
}
.hero__content {
  flex: 0;
  flex-basis: 390px;
  width: 390px;
  height: 190px;
  margin: 0 1rem;
  margin-top: -40px;
  border: 4px solid #fff;
}
.hero__header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  height: 50%;
  width: 100%;
  text-align: center;
  line-height: 2.5rem;
}
.hero__header::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 2.5rem;
  left: 2.5rem;
  height: 2px;
  background-color: #fff;
  display: block;
}
.hero__header h1 {
  margin: 0;
}
.hero__subheader {
  display: flex;
  justify-content: center;
  font-size: 0.85rem;
  margin-top: 1.25rem;
  text-align: center;
}
.hero__subheader h2 {
  font-weight: 400;
  margin: 0 1rem;
}
.body {
  z-index: 2;
  padding: 2rem;
  position: relative;
  margin: -110px auto 0 auto;
  max-width: 960px;
  background-color: #fff;
  box-sizing: border-box;
}
.intro {
  display: flex;
  padding: 0 3rem;
}
.intro__text {
  color: #000;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.8rem;
  padding: 3rem;
}
.intro__image {
  display: flex;
  align-items: center;
  padding: 3rem;
}
.intro__image img {
  border-radius: 50%;
}
.separator {
  height: 8px;
  background-color: #efefef;
  margin: 0 9rem;
}
.connect {
  padding: 1.5rem;
}
.connect__text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  color: #777;
}

@media (max-width: 960px) {
  .body,
  .intro__text{
    padding: 1.5rem;
  }
  .intro__image {
    align-items: flex-start;
    padding: 1.5rem 0 1.5rem 3rem;
  }
}
@media (max-width: 800px) {
  .intro__text {
    padding: 1.5rem 0;
  }
  .separator {
    margin: 0 6rem;
  }
}

@media (max-width: 640px) {
  .intro {
    flex-direction: column-reverse;
  }
  .intro__text {
    padding: 1.5rem 0;
  }
  .intro__image {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.5rem 0;
  }
  .separator {
    margin: 0 3rem;
  }
  .connect__text {
    padding: 0 3rem;
    text-align: center;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CopyLink from '@/components/CopyLink.vue';
import GithubIcon from '@/assets/github.svg'
import EmailIcon from '@/assets/email-outline.svg'
import LinkedInIcon from '@/assets/linkedin.svg'

@Component({
  components: {
    CopyLink
  }
})
export default class HomeView extends Vue {
  copyLinks = [
    {icon: EmailIcon, href:"Surguy.Derek@gmail.com", linkPrefix: "mailto:"},
    {icon: GithubIcon, href:"https://github.com/DSurguy"},
    {icon: LinkedInIcon, href:"https://linkedin.com/DSurguy"}
  ]
}
</script>