"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo11",
  setup(__props) {
    const person = common_vendor.ref({
      name: "Jone",
      age: 33
    });
    common_vendor.watch(person, (newValue) => {
      console.log(newValue);
    }, { deep: true, immediate: true });
    return (_ctx, _cache) => {
      return {
        a: person.value,
        b: common_vendor.o(($event) => person.value = $event.detail.value),
        c: person.value.name,
        d: common_vendor.o(($event) => person.value.name = $event.detail.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/qtzxly_github/HYwallpaper/pages/demo11/demo11.vue"]]);
wx.createPage(MiniProgramPage);
