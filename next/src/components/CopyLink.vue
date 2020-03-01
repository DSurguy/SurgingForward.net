<template>
  <div class="copyLink">
    <div class="icon">
      <component :is="icon" />
    </div>
    <div class="link">
      <a :href="`${linkPrefix}${href}`">{{href}}</a>
      <div class="hiddenDiv" ref="input">{{href}}</div>
    </div>
    <div class="copy" @click="copyLink()">
      <CopyIcon />
      <span>Copy</span>
    </div>
  </div>
</template>

<style scoped>
.copyLink {
  box-shadow: 0 0 6px rgba(0,0,0,0.16);
  height: 80px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.link {
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #f5f5f5;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 56px;
}

.link a {
  font-size: 24px;
  font-weight: 300;
  margin-left: 16px;
  color: #000;
}
.link a:active,
.link a:hover,
.link a:visited {
  color: #000;
}

.icon {
  display: flex;
  width: 78px;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.icon svg {
  width: 48px;
  height: 48px;
}

.copy {
  display: flex;
  width: 120px;
  height: 56px;
  margin-right: 12px;
  background-color: #0099FF;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.copy:active {
  background-color: #007BCE;
}
.copy span {
  color: #fff;
  font-size: 24px;
}
.copy svg {
  height: 32px;
  width: 32px;
  fill: #fff;
  margin: 0 10px 0 10px;
}

.hiddenDiv {
  position: absolute;
  display: block;
  width: 1px;
  height: 1px;
  left: -9999px;
  overflow: hidden;
}

@media (max-width: 700px) {
  .copyLink {
    height: 144px;
    flex-wrap: wrap;
  }
  .link {
    border-radius: 8px;
    margin-right: 16px;
    justify-content: center;
  }
  .link a {
    margin-left: 0;
    font-size: 22px;
  }
  .icon {
    width: 64px;
    min-width: 64px;
    height: 68px;
  }
  .icon svg {
    width: 32px;
    height: 32px;
    margin-top: 8px;
  }
  .copy {
    width: calc(100% - 32px);
    border-radius: 8px;
    margin: 0 auto;
    justify-content: center;
  }
  .copy span {
    font-size: 22px;
  }
}
@media (max-width: 420px) {
  .copyLink {
    position: relative;
  }
  .link {
    margin-left: 16px;
  }
  .link a {
    font-size: 20px;
  }
  .icon {
    width: 32px;
    min-width: 0;
    height: 32px;
    position: absolute;
    top: -10px;
    left: -10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.16);
  }
  .icon svg {
    width: 28px;
    height: 28px;
    margin-top: 0;
  }
  .copy span {
    font-size: 20px;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CopyIcon from '@/assets/content-copy.svg';

@Component({
  components: {
    CopyIcon
  }
})
export default class CopyLink extends Vue {
  @Prop(String) linkPrefix!: string;
  @Prop(String) href!: string;
  @Prop(Object) icon!: Vue;

  copyLink(){
    try{
      window.getSelection()!.removeAllRanges();
      let range = document.createRange();
      range.selectNode(this.$refs.input as HTMLElement);
      window.getSelection()!.addRange(range);
      document.execCommand('copy');
    } catch (e){

    }
  }
}
</script>