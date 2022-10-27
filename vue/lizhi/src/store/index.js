import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// const { Store } = Vuex;
// , mapState, mapMutations, mapGetters 
export default new Vuex.Store({
  state: {
    navdatas: null,
    kinddatasID: JSON.parse(localStorage.getItem("kinddatasID")) || null,
    playlist: JSON.parse(localStorage.getItem("playlist")) || null,
    playvoice: JSON.parse(localStorage.getItem("playvoice")) || null,
    duration: 0,
    currentTime: JSON.parse(localStorage.getItem("li_currentTime")) || 0,
    playing: false,
  },
  getters: {
    getID(state) {
      if (state.playvoice?.voiceInfo) {
        let playIndex = state.playlist.findIndex(
          e => e.voiceInfo.voiceId === state.playvoice.voiceInfo.voiceId
        );
        return state.playlist.filter((e, i) => i == playIndex)[0].voiceInfo.voiceId;
      }
      if (!state.playvoice.userVoice && !state.playvoice.voiceInfo) {
        let playIndex = state.playlist.findIndex(
          e => e.voiceId === state.playvoice.voiceId
        );
        return state.playlist.filter((e, i) => i == playIndex)[0].voiceId;
      }
    },
    navdataslice(state) {
      if (state.navdatas) {
        return state.navdatas.filter((e, i) => i !== 0);
      }
    },
    navdatasplice(state) {
      if (state.navdatas) {
        return state.navdatas.filter((e, i) => i == 0);
      }
    }
  },
  mutations: {
    getnavdatas(state, homeobj) {
      return state.navdatas = homeobj;
    },
    getkinddatas(state, { id, text, type }) {
      localStorage.setItem("kinddatasID", JSON.stringify([id, text, type]));
      return state.kinddatasID = [id, text, type];
    },
    getPlayList(state, list) {
      // console.log(list);
      localStorage.setItem("playlist", JSON.stringify(list));
      return state.playlist = list;
    },
    getPlayVoice(state, voice) {
      // console.log(voice);
      localStorage.setItem("playvoice", JSON.stringify(voice));
      return state.playvoice = voice;
    },
    getduration(state, ftime) {
      return state.duration = ftime;
    },
    getcurrentTime(state, time) {
      localStorage.setItem("li_currentTime", JSON.stringify(time));
      return state.currentTime = time;
    },
    playtrue(state) {
      return state.playing = true;
    },
    playfalse(state) {
      return state.playing = false;
    },
    toggleplaying(state) {
      return state.playing = !state.playing;
    },
    changecurrentTime(state, time) {
      state.currentTime = Number(time);
      localStorage.setItem("li_currentTime", JSON.stringify(state.currentTime));
      return document.querySelector("audio").currentTime = state.currentTime;
    },
    timeprev(state) {
      if (state.currentTime < 15) {
        state.currentTime = 0;
      } else {
        state.currentTime -= 15;
      }
      localStorage.setItem("li_currentTime", JSON.stringify(state.currentTime));
      return document.querySelector("audio").currentTime = state.currentTime;
    },
    timenext(state) {
      if (state.duration - state.currentTime < 15) {
        state.currentTime = state.duration;
      } else {
        state.currentTime += 15;
      }
      localStorage.setItem("li_currentTime", JSON.stringify(state.currentTime));
      return document.querySelector("audio").currentTime = state.currentTime;
    },
    changeVoice(state, direction) {
      if (state.playvoice.voiceInfo) {
        let playIndex = state.playlist.findIndex(
          e => e.voiceInfo.voiceId === state.playvoice.voiceInfo.voiceId
        );
        if (direction === "next") {
          state.playvoice = playIndex === state.playlist.length - 1 ? state.playlist[0] : state.playlist[playIndex + 1];
        } else {
          state.playvoice = playIndex === 0 ? state.playlist[state.playlist.length - 1] : state.playlist[playIndex - 1];
        }
      }
      if (!state.playvoice.userVoice && !state.playvoice.voiceInfo) {
        let playIndex = state.playlist.findIndex(
          e => e.voiceId === state.playvoice.voiceId
        );
        if (direction === "next") {
          state.playvoice = playIndex === state.playlist.length - 1 ? state.playlist[0] : state.playlist[playIndex + 1];
        } else {
          state.playvoice = playIndex === 0 ? state.playlist[state.playlist.length - 1] : state.playlist[playIndex - 1];
        }
      }
      localStorage.setItem("playvoice", JSON.stringify(state.playvoice));
    },
    // playcontrol(state) {
    //   document.querySelector("audio").load();
    //   var play = document.querySelector("audio").play();
    //   if (state.playing && play) {
    //     play.then(() => {
    //       document.querySelector("audio").play();
    //     }).catch(() => {
    //       console.log("等待加载!!!");
    //     });
    //   } else {
    //     document.querySelector("audio").pause();
    //   }
    // }
  },
  actions: {
  },
  modules: {
  }
});
