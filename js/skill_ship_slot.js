let slot_sp_data = {
    type: {
      dd: [1],
      cb: [11],
      main_gun: [1, 2, 3, 4, 11],
      cl_gun: [2],
      aa: [6]
    },
    hulls: {
      cvs: [6, 7]
    },
    nation: {
      uss: [1],
      hms: [2],
      ijn: [3],
      kms: [4],
      rn: [6],
      sn: [7],
      de: [5],
      no_ijn: [1, 2, 4, 5, 6, 7, 8, 9]
    },
    id: {
      albacore: [28340, 28320, 28300],
      f6f: [17340, 17320, 17300],
      model1907: [85420],
      marco: [699010, ''],
      shimanto: [399060, ''],
      taihou_sp: [10340],
      hood_sp: [10520],
      tashkent_sp: [9913280]
    }
  },
  skill_ship_slot = {
    207010: {
      type: 1,
      slot: [3],
      check: 'eq_type',
      list: slot_sp_data.type.main_gun,
      p_diff: 45
    },
    207050: {
      type: 1,
      slot: [2, 3],
      check: 'id',
      list: slot_sp_data.id.albacore,
      p_diff: 15
    },
    302059: {
      type: 1,
      slot: [1],
      check: 'nationality',
      list: slot_sp_data.nation.no_ijn,
      p_diff: [20, 50, -50]
    },
    407010: {
      type: 1,
      slot: [1, 2, 3],
      check: 'nationality',
      list: slot_sp_data.nation.kms,
      p_diff: [30, 30, 30]
    },
    801010: {
      type: 2,
      slot: ['front_1'],
      check: 'id',
      list: [801010],
      p_diff: [20, 0, -30]
    },
    107229: {
      type: 1,
      slot: [1, 2],
      check: 'nationality',
      list: slot_sp_data.nation.uss,
      p_diff: 15
    },
    107220: {
      type: 1,
      slot: [1, 2],
      check: 'nationality',
      list: slot_sp_data.nation.uss,
      p_diff: 15
    },
    107290: {
      type: 1,
      slot: [1],
      check: 'id',
      list: slot_sp_data.id.f6f,
      p_diff: 30
    },
    701040: {
      type: 3,
      slot: [1],
      cons: [
        {
          type: 1,
          slot: [1],
          check: 'nationality',
          list: slot_sp_data.nation.sn,
          p_diff: 10
        },
        {
          type: 1,
          slot: [6],
          check: 'id',
          list: slot_sp_data.id.tashkent_sp,
          p_diff: [10, 0, 0]
        }
      ]
    },
    705010: {
      type: 1,
      slot: [1],
      check: 'id',
      list: slot_sp_data.id.model1907,
      p_diff: 80
    },
    102260: {
      type: 1,
      slot: [1],
      check: 'eq_type',
      list: slot_sp_data.type.dd,
      p_diff: 10
    },
    807010: {
      type: 1,
      slot: [3],
      check: 'eq_type',
      list: slot_sp_data.type.main_gun,
      p_diff: 45
    },
    199010: {
      type: 3,
      slot: [2],
      cons: [
        {
          type: 1,
          slot: [2],
          check: 'eq_type',
          list: slot_sp_data.type.main_gun,
          p_diff: [0, 0, 15]
        },
        {
          type: 1,
          slot: [2],
          check: 'eq_type',
          list: slot_sp_data.type.aa,
          p_diff: [15, 0, 0]
        }
      ]
    },
    399030: {
      type: 1,
      slot: [1],
      check: 'nationality',
      list: slot_sp_data.nation.ijn,
      p_diff: 15
    },
    399040: {
      type: 1,
      slot: [1],
      check: 'eq_type',
      list: slot_sp_data.type.cb,
      p_diff: 12
    },
    499050: {
      type: 1,
      slot: [1],
      check: 'eq_type',
      list: slot_sp_data.type.cb,
      p_diff: 12
    },
    499060: {
      type: 1,
      slot: [1, 2, 3],
      check: 'nationality',
      list: slot_sp_data.nation.kms,
      p_diff: [10, 0, 0]
    },
    506029: {
      type: 3,
      slot: [1, 2],
      cons: [
        {
          type: 2,
          slot: ['back_1'],
          check: 'type',
          list: slot_sp_data.hulls.cvs,
          p_diff: [10, 10],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['back_2'],
          check: 'type',
          list: slot_sp_data.hulls.cvs,
          p_diff: [10, 10],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['back_3'],
          check: 'type',
          list: slot_sp_data.hulls.cvs,
          p_diff: [10, 10],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['back_1'],
          check: 'nationality',
          list: slot_sp_data.nation.de,
          p_diff: [10, 10],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['back_2'],
          check: 'nationality',
          list: slot_sp_data.nation.de,
          p_diff: [10, 10],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['back_3'],
          check: 'nationality',
          list: slot_sp_data.nation.de,
          p_diff: [10, 10],
          NOT_self: 0
        }
      ]
    },
    699010: {
      type: 3,
      slot: [1, 2, 3],
      cons: [
        {
          type: 2,
          slot: ['back_1'],
          check: 'id',
          list: slot_sp_data.id.marco,
          p_diff: [15, 0, 50],
          NOT_self: !0
        },
        {
          type: 2,
          slot: ['back_2'],
          check: 'id',
          list: slot_sp_data.id.marco,
          p_diff: [15, 0, 50],
          NOT_self: !0
        },
        {
          type: 2,
          slot: ['back_3'],
          check: 'id',
          list: slot_sp_data.id.marco,
          p_diff: [15, 0, 50],
          NOT_self: !0
        }
      ]
    },
    718010: {
      type: 1,
      slot: [1, 2, 3, 4, 5],
      check: 'nationality',
      list: slot_sp_data.nation.sn,
      p_diff: [0, 45, 0]
    },
    402070: {
      type: 1,
      slot: [2],
      check: 'eq_type',
      list: slot_sp_data.type.cl_gun,
      p_diff: [25, 25, 0]
    },
    205130: {
      type: 1,
      slot: [1, 2, 3, 4, 5],
      check: 'nationality',
      list: slot_sp_data.nation.hms,
      p_diff: [0, 0, 30]
    },
    307070: {
      type: 1,
      slot: [6],
      check: 'id',
      list: slot_sp_data.id.taihou_sp,
      p_diff: [0, 10, 10]
    },
    204030: {
      type: 1,
      slot: [6],
      check: 'id',
      list: slot_sp_data.id.hood_sp,
      p_diff: [0, 30, 0]
    },
    10600090: {
      type: 1,
      slot: [1],
      check: 'eq_type',
      list: slot_sp_data.type.main_gun,
      p_diff: 10
    },
    399060: {
      type: 3,
      slot: [1, 2, 3],
      cons: [
        {
          type: 2,
          slot: ['front_1'],
          check: 'id',
          list: slot_sp_data.id.shimanto,
          p_diff: [15, 0, 30],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['front_2'],
          check: 'id',
          list: slot_sp_data.id.shimanto,
          p_diff: [15, 0, 30],
          NOT_self: 0
        },
        {
          type: 2,
          slot: ['front_3'],
          check: 'id',
          list: slot_sp_data.id.shimanto,
          p_diff: [15, 0, 30],
          NOT_self: 0
        }
      ]
    }
  }
