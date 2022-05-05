import {createStore} from 'vuex'

const store = createStore({
    state: {
        money: 600,
        foldList: [5,10,20,30,50,100,200,500,1000,1500,2500],
        incomingMatcList: [
            {
                id: 1,
                title: "Fenarbahçe x Galatasary",
                time: "Saat: 19:00"
              },
              {
                id: 2,
                title: "Fenarbahçe x Beşiktaş",
                time: "Saat: 21:00"
              },
              {
                id: 3,
                title: "Beşiktaş x Galatasary",
                time: "Saat: 23:00"
              },
              {
                id: 4,
                title: "Trabzonspor x Galatasary",
                time: "Saat: 24:00"
              }
        ],
        couponList: [],
        totalRate: 0
    },

    mutations: {
        setCouponItem(state, payload){
            state.couponList.push(
              {
                id: new Date().getTime(),
                title: payload.match.title,
                time: payload.match.time,
                rate: payload.rate,
                rateIndex: payload.rateIndex
              }
            );
            state.totalRate += payload.rate;
        }
    },

    actions: {
        addCouponItem({commit}, payload){
            commit("setCouponItem", payload);
        }
    },

    getters: {
        _couponList: state => state.couponList,
        _incomingMatcList: state => state.incomingMatcList,
        _totalRate: state => state.totalRate,
        _foldList: state => state.foldList,
        _money: state => state.money
    }
});

export default store;