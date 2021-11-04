// Automatically generated with Reach 0.1.6 (fb449c94)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (fb449c94)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v436 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v436],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v436, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v440], secs: v442, time: v441, didSend: v67, from: v439 } = txn1;
      
      sim_r.txns.push({
        amt: v440,
        kind: 'to',
        tok: undefined
        });
      const v446 = stdlib.add(v441, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v440], secs: v442, time: v441, didSend: v67, from: v439 } = txn1;
  ;
  const v446 = stdlib.add(v441, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v446],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v439, v440, v446],
      evt_cnt: 0,
      funcNum: 2,
      lct: v441,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v703, time: v702, didSend: v388, from: v701 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v705 = stdlib.addressEq(v439, v701);
        stdlib.assert(v705, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v440,
          kind: 'from',
          to: v439,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v703, time: v702, didSend: v388, from: v701 } = txn3;
    ;
    const v705 = stdlib.addressEq(v439, v701);
    stdlib.assert(v705, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v452, time: v451, didSend: v76, from: v450 } = txn2;
    const v454 = stdlib.add(v440, v440);
    ;
    let v455 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v456 = v451;
    let v463 = v454;
    
    while ((() => {
      const v471 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v471;})()) {
      const v473 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const v477 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:103:48:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v478 = stdlib.protect(ctc0, await interact.getGuess(v477), {
        at: './index.rsh:104:44:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.log(v477), {
        at: './index.rsh:106:23:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'log',
        who: 'Alice'
        });
      const v479 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:57:31:application',
        fs: ['at ./index.rsh:111:52:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v480 = stdlib.digest(ctc2, [v479, v477]);
      const v482 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:57:31:application',
        fs: ['at ./index.rsh:113:62:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v483 = stdlib.digest(ctc2, [v482, v478]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v439, v440, v450, v463, v473, v480],
        evt_cnt: 1,
        funcNum: 4,
        lct: v456,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v486], secs: v488, time: v487, didSend: v108, from: v485 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v490 = stdlib.addressEq(v439, v485);
          stdlib.assert(v490, {
            at: './index.rsh:117:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v492 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v473],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 5,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v670, time: v669, didSend: v344, from: v668 } = txn4;
        ;
        const v672 = stdlib.addressEq(v450, v668);
        stdlib.assert(v672, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v486], secs: v488, time: v487, didSend: v108, from: v485 } = txn3;
        ;
        const v490 = stdlib.addressEq(v439, v485);
        stdlib.assert(v490, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v492 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.sendrecv({
          args: [v439, v440, v450, v463, v486, v492, v483],
          evt_cnt: 1,
          funcNum: 6,
          lct: v487,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v495], secs: v497, time: v496, didSend: v115, from: v494 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v499 = stdlib.addressEq(v439, v494);
            stdlib.assert(v499, {
              at: './index.rsh:121:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v501 = stdlib.add(v496, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v492],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 7,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v653, time: v652, didSend: v318, from: v651 } = txn5;
          ;
          const v655 = stdlib.addressEq(v450, v651);
          stdlib.assert(v655, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v495], secs: v497, time: v496, didSend: v115, from: v494 } = txn4;
          ;
          const v499 = stdlib.addressEq(v439, v494);
          stdlib.assert(v499, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v501 = stdlib.add(v496, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v501],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v439, v440, v450, v463, v486, v495, v501],
              evt_cnt: 0,
              funcNum: 9,
              lct: v496,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v636, time: v635, didSend: v292, from: v634 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v638 = stdlib.addressEq(v439, v634);
                stdlib.assert(v638, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                sim_r.txns.push({
                  amt: v463,
                  kind: 'from',
                  to: v439,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v636, time: v635, didSend: v292, from: v634 } = txn6;
            ;
            const v638 = stdlib.addressEq(v439, v634);
            stdlib.assert(v638, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v508], secs: v510, time: v509, didSend: v127, from: v507 } = txn5;
            ;
            const v512 = stdlib.addressEq(v450, v507);
            stdlib.assert(v512, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v514 = stdlib.add(v509, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v514],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v439, v440, v450, v463, v486, v495, v508, v514],
                evt_cnt: 0,
                funcNum: 11,
                lct: v509,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [], secs: v619, time: v618, didSend: v266, from: v617 } = txn7;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v621 = stdlib.addressEq(v439, v617);
                  stdlib.assert(v621, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.txns.push({
                    amt: v463,
                    kind: 'from',
                    to: v439,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v619, time: v618, didSend: v266, from: v617 } = txn7;
              ;
              const v621 = stdlib.addressEq(v439, v617);
              stdlib.assert(v621, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v517], secs: v519, time: v518, didSend: v134, from: v516 } = txn6;
              ;
              const v521 = stdlib.addressEq(v450, v516);
              stdlib.assert(v521, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v523 = stdlib.add(v518, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.sendrecv({
                args: [v439, v440, v450, v463, v486, v495, v508, v517, v523, v479, v477],
                evt_cnt: 2,
                funcNum: 12,
                lct: v518,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const {data: [v528, v529], secs: v531, time: v530, didSend: v145, from: v527 } = txn7;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v533 = stdlib.addressEq(v439, v527);
                  stdlib.assert(v533, {
                    at: './index.rsh:154:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v534 = stdlib.digest(ctc2, [v528, v529]);
                  const v535 = stdlib.digestEq(v486, v534);
                  stdlib.assert(v535, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v537 = stdlib.add(v530, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v523],
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 13,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v602, time: v601, didSend: v240, from: v600 } = txn8;
                ;
                const v604 = stdlib.addressEq(v450, v600);
                stdlib.assert(v604, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v528, v529], secs: v531, time: v530, didSend: v145, from: v527 } = txn7;
                ;
                const v533 = stdlib.addressEq(v439, v527);
                stdlib.assert(v533, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v534 = stdlib.digest(ctc2, [v528, v529]);
                const v535 = stdlib.digestEq(v486, v534);
                stdlib.assert(v535, {
                  at: 'reach standard library:62:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v537 = stdlib.add(v530, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.sendrecv({
                  args: [v439, v440, v450, v463, v495, v508, v517, v529, v537, v482, v478],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v530,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [v540, v541], secs: v543, time: v542, didSend: v156, from: v539 } = txn8;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v545 = stdlib.addressEq(v439, v539);
                    stdlib.assert(v545, {
                      at: './index.rsh:160:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    const v546 = stdlib.digest(ctc2, [v540, v541]);
                    const v547 = stdlib.digestEq(v495, v546);
                    stdlib.assert(v547, {
                      at: 'reach standard library:62:17:application',
                      fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                      msg: null,
                      who: 'Alice'
                      });
                    const v549 = stdlib.add(v542, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v537],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 0,
                    funcNum: 15,
                    out_tys: [],
                    timeoutAt: undefined,
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v585, time: v584, didSend: v214, from: v583 } = txn9;
                  ;
                  const v587 = stdlib.addressEq(v450, v583);
                  stdlib.assert(v587, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v540, v541], secs: v543, time: v542, didSend: v156, from: v539 } = txn8;
                  ;
                  const v545 = stdlib.addressEq(v439, v539);
                  stdlib.assert(v545, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v546 = stdlib.digest(ctc2, [v540, v541]);
                  const v547 = stdlib.digestEq(v495, v546);
                  stdlib.assert(v547, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v549 = stdlib.add(v542, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const v553 = stdlib.add(v529, v508);
                  stdlib.protect(ctc1, await interact.seeWinning(v553), {
                    at: './index.rsh:168:30:application',
                    fs: ['at ./index.rsh:166:15:application call to [unknown function] (defined at: ./index.rsh:166:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn9 = await (ctc.sendrecv({
                    args: [v439, v440, v450, v463, v508, v517, v529, v541, v549, v553],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v542,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                      
                      const {data: [v555], secs: v557, time: v556, didSend: v170, from: v554 } = txn9;
                      
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                        });
                      const v559 = stdlib.addressEq(v439, v554);
                      stdlib.assert(v559, {
                        at: './index.rsh:171:11:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Alice'
                        });
                      let v560;
                      const v561 = stdlib.eq(v541, v517);
                      if (v561) {
                        v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                        }
                      else {
                        const v563 = stdlib.eq(v553, v541);
                        if (v563) {
                          v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                          }
                        else {
                          const v565 = stdlib.eq(v553, v517);
                          if (v565) {
                            v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                            }
                          else {
                            v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                            }
                          }
                        }
                      const cv455 = v560;
                      const cv456 = v556;
                      const cv463 = v463;
                      
                      (() => {
                        const v455 = cv455;
                        const v456 = cv456;
                        const v463 = cv463;
                        
                        if ((() => {
                          const v471 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v471;})()) {
                          const v473 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                          sim_r.isHalt = false;
                          }
                        else {
                          const v685 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v688 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v440);
                          const v690 = v685 ? v439 : v450;
                          sim_r.txns.push({
                            amt: v688,
                            kind: 'from',
                            to: v690,
                            tok: undefined
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v549],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v439, v440, v450, v463, v508, v517, v529, v541, v549],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v542,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                        
                        const {data: [], secs: v568, time: v567, didSend: v188, from: v566 } = txn10;
                        
                        sim_r.txns.push({
                          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                          kind: 'to',
                          tok: undefined
                          });
                        const v570 = stdlib.addressEq(v439, v566);
                        stdlib.assert(v570, {
                          at: 'reach standard library:206:7:dot',
                          fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                          msg: 'sender correct',
                          who: 'Alice'
                          });
                        sim_r.txns.push({
                          amt: v463,
                          kind: 'from',
                          to: v439,
                          tok: undefined
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: true,
                      timeoutAt: undefined,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v568, time: v567, didSend: v188, from: v566 } = txn10;
                    ;
                    const v570 = stdlib.addressEq(v439, v566);
                    stdlib.assert(v570, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v555], secs: v557, time: v556, didSend: v170, from: v554 } = txn9;
                    ;
                    const v559 = stdlib.addressEq(v439, v554);
                    stdlib.assert(v559, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v560;
                    const v561 = stdlib.eq(v541, v517);
                    if (v561) {
                      v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v563 = stdlib.eq(v553, v541);
                      if (v563) {
                        v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v565 = stdlib.eq(v553, v517);
                        if (v565) {
                          v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv455 = v560;
                    const cv456 = v556;
                    const cv463 = v463;
                    
                    v455 = cv455;
                    v456 = cv456;
                    v463 = cv463;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v685 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v688 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v440);
    const v690 = v685 ? v439 : v450;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v455), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v440], secs: v442, time: v441, didSend: v67, from: v439 } = txn1;
  ;
  const v446 = stdlib.add(v441, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  stdlib.protect(ctc1, await interact.acceptWager(v440), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v439, v440, v446],
    evt_cnt: 0,
    funcNum: 1,
    lct: v441,
    onlyIf: true,
    out_tys: [],
    pay: [v440, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v452, time: v451, didSend: v76, from: v450 } = txn2;
      
      const v454 = stdlib.add(v440, v440);
      sim_r.txns.push({
        amt: v440,
        kind: 'to',
        tok: undefined
        });
      const v455 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v456 = v451;
      const v463 = v454;
      
      if ((() => {
        const v471 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v471;})()) {
        const v473 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        sim_r.isHalt = false;
        }
      else {
        const v685 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v688 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v440);
        const v690 = v685 ? v439 : v450;
        sim_r.txns.push({
          amt: v688,
          kind: 'from',
          to: v690,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v446],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v703, time: v702, didSend: v388, from: v701 } = txn3;
    ;
    const v705 = stdlib.addressEq(v439, v701);
    stdlib.assert(v705, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v452, time: v451, didSend: v76, from: v450 } = txn2;
    const v454 = stdlib.add(v440, v440);
    ;
    let v455 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v456 = v451;
    let v463 = v454;
    
    while ((() => {
      const v471 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v471;})()) {
      const v473 = stdlib.add(v456, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v473],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v439, v440, v450, v463, v473],
          evt_cnt: 0,
          funcNum: 5,
          lct: v456,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v670, time: v669, didSend: v344, from: v668 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v672 = stdlib.addressEq(v450, v668);
            stdlib.assert(v672, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v463,
              kind: 'from',
              to: v450,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v670, time: v669, didSend: v344, from: v668 } = txn4;
        ;
        const v672 = stdlib.addressEq(v450, v668);
        stdlib.assert(v672, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v486], secs: v488, time: v487, didSend: v108, from: v485 } = txn3;
        ;
        const v490 = stdlib.addressEq(v439, v485);
        stdlib.assert(v490, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v492 = stdlib.add(v487, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v492],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v439, v440, v450, v463, v486, v492],
            evt_cnt: 0,
            funcNum: 7,
            lct: v487,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v653, time: v652, didSend: v318, from: v651 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v655 = stdlib.addressEq(v450, v651);
              stdlib.assert(v655, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v463,
                kind: 'from',
                to: v450,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v653, time: v652, didSend: v318, from: v651 } = txn5;
          ;
          const v655 = stdlib.addressEq(v450, v651);
          stdlib.assert(v655, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v495], secs: v497, time: v496, didSend: v115, from: v494 } = txn4;
          ;
          const v499 = stdlib.addressEq(v439, v494);
          stdlib.assert(v499, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v501 = stdlib.add(v496, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const v505 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:131:48:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v506 = stdlib.protect(ctc0, await interact.getGuess(v505), {
            at: './index.rsh:133:44:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v439, v440, v450, v463, v486, v495, v501, v505],
            evt_cnt: 1,
            funcNum: 8,
            lct: v496,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [v508], secs: v510, time: v509, didSend: v127, from: v507 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v512 = stdlib.addressEq(v450, v507);
              stdlib.assert(v512, {
                at: './index.rsh:140:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v514 = stdlib.add(v509, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v501],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 9,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v636, time: v635, didSend: v292, from: v634 } = txn6;
            ;
            const v638 = stdlib.addressEq(v439, v634);
            stdlib.assert(v638, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v508], secs: v510, time: v509, didSend: v127, from: v507 } = txn5;
            ;
            const v512 = stdlib.addressEq(v450, v507);
            stdlib.assert(v512, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v514 = stdlib.add(v509, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.sendrecv({
              args: [v439, v440, v450, v463, v486, v495, v508, v514, v506],
              evt_cnt: 1,
              funcNum: 10,
              lct: v509,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [v517], secs: v519, time: v518, didSend: v134, from: v516 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v521 = stdlib.addressEq(v450, v516);
                stdlib.assert(v521, {
                  at: './index.rsh:143:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v523 = stdlib.add(v518, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v514],
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 11,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const {data: [], secs: v619, time: v618, didSend: v266, from: v617 } = txn7;
              ;
              const v621 = stdlib.addressEq(v439, v617);
              stdlib.assert(v621, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v517], secs: v519, time: v518, didSend: v134, from: v516 } = txn6;
              ;
              const v521 = stdlib.addressEq(v450, v516);
              stdlib.assert(v521, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v523 = stdlib.add(v518, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v523],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v439, v440, v450, v463, v486, v495, v508, v517, v523],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v518,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const {data: [], secs: v602, time: v601, didSend: v240, from: v600 } = txn8;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v604 = stdlib.addressEq(v450, v600);
                    stdlib.assert(v604, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    sim_r.txns.push({
                      amt: v463,
                      kind: 'from',
                      to: v450,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: undefined,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v602, time: v601, didSend: v240, from: v600 } = txn8;
                ;
                const v604 = stdlib.addressEq(v450, v600);
                stdlib.assert(v604, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v528, v529], secs: v531, time: v530, didSend: v145, from: v527 } = txn7;
                ;
                const v533 = stdlib.addressEq(v439, v527);
                stdlib.assert(v533, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v534 = stdlib.digest(ctc3, [v528, v529]);
                const v535 = stdlib.digestEq(v486, v534);
                stdlib.assert(v535, {
                  at: 'reach standard library:62:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v537 = stdlib.add(v530, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v537],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v439, v440, v450, v463, v495, v508, v517, v529, v537],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v530,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                      
                      const {data: [], secs: v585, time: v584, didSend: v214, from: v583 } = txn9;
                      
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                        });
                      const v587 = stdlib.addressEq(v450, v583);
                      stdlib.assert(v587, {
                        at: 'reach standard library:206:7:dot',
                        fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Bob'
                        });
                      sim_r.txns.push({
                        amt: v463,
                        kind: 'from',
                        to: v450,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: undefined,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v585, time: v584, didSend: v214, from: v583 } = txn9;
                  ;
                  const v587 = stdlib.addressEq(v450, v583);
                  stdlib.assert(v587, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v540, v541], secs: v543, time: v542, didSend: v156, from: v539 } = txn8;
                  ;
                  const v545 = stdlib.addressEq(v439, v539);
                  stdlib.assert(v545, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v546 = stdlib.digest(ctc3, [v540, v541]);
                  const v547 = stdlib.digestEq(v495, v546);
                  stdlib.assert(v547, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v549 = stdlib.add(v542, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v549],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.recv({
                      didSend: false,
                      evt_cnt: 0,
                      funcNum: 17,
                      out_tys: [],
                      timeoutAt: undefined,
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v568, time: v567, didSend: v188, from: v566 } = txn10;
                    ;
                    const v570 = stdlib.addressEq(v439, v566);
                    stdlib.assert(v570, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v555], secs: v557, time: v556, didSend: v170, from: v554 } = txn9;
                    ;
                    const v559 = stdlib.addressEq(v439, v554);
                    stdlib.assert(v559, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v560;
                    const v561 = stdlib.eq(v541, v517);
                    if (v561) {
                      v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v562 = stdlib.add(v529, v508);
                      const v563 = stdlib.eq(v562, v541);
                      if (v563) {
                        v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v565 = stdlib.eq(v562, v517);
                        if (v565) {
                          v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v560 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv455 = v560;
                    const cv456 = v556;
                    const cv463 = v463;
                    
                    v455 = cv455;
                    v456 = cv456;
                    v463 = cv463;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v685 = stdlib.eq(v455, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v688 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v440);
    const v690 = v685 ? v439 : v450;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v455), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:88:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:88:9:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
global Round
int 30
+
store 253
txn Sender
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:94:9:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 255
load 254
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAE=)
global Round
itob
concat
load 254
dup
+
itob
concat
b loopBody3
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
l8_afterHandler3:
// Handler 4
dup
int 4
==
bz l9_afterHandler4
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 250
pop
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:117:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 249
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 120
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_afterHandler4:
// Handler 5
dup
int 5
==
bz l10_afterHandler5
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l11_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l11_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l12_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l10_afterHandler5:
// Handler 6
dup
int 6
==
bz l13_afterHandler6
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:121:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:121:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 248
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 249
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 25
app_global_put
pop
int 9
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13_afterHandler6:
// Handler 7
dup
int 7
==
bz l14_afterHandler7
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l15_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l15_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l16_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l14_afterHandler7:
// Handler 8
dup
int 8
==
bz l17_afterHandler8
pop
// check step
int 9
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:140:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:140:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 247
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 248
itob
concat
load 247
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 33
app_global_put
pop
int 11
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l17_afterHandler8:
// Handler 9
dup
int 9
==
bz l18_afterHandler9
pop
// check step
int 9
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l19_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l19_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l20_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l18_afterHandler9:
// Handler 10
dup
int 10
==
bz l21_afterHandler10
pop
// check step
int 11
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 247
pop
global Round
load 248
<
assert
// "CheckPay"
// "./index.rsh:143:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:143:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 246
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 247
itob
concat
load 246
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 41
app_global_put
pop
int 13
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l21_afterHandler10:
// Handler 11
dup
int 11
==
bz l22_afterHandler11
pop
// check step
int 11
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 248
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l23_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l23_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l24_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22_afterHandler11:
// Handler 12
dup
int 12
==
bz l25_afterHandler12
pop
// check step
int 13
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
dup
int 160
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 246
dup
int 8
extract_uint64
store 245
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:154:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:154:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:157:24:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 17
app_global_put
pop
int 15
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l25_afterHandler12:
// Handler 13
dup
int 13
==
bz l26_afterHandler13
pop
// check step
int 13
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
dup
int 160
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l27_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l27_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l28_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l26_afterHandler13:
// Handler 14
dup
int 14
==
bz l29_afterHandler14
pop
// check step
int 15
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 246
dup
int 8
extract_uint64
store 245
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:160:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:160:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:162:24:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
int 1
bzero
dig 1
extract 0 120
app_global_put
pop
int 17
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l29_afterHandler14:
// Handler 15
dup
int 15
==
bz l30_afterHandler15
pop
// check step
int 15
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l31_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l31_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l32_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l30_afterHandler15:
// Handler 16
dup
int 16
==
bz l33_afterHandler16
pop
// check step
int 17
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
dup
int 112
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:171:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:171:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 248
load 250
==
bz l34_localIfF
int 1
store 245
b l35_localIfK
l34_localIfF:
load 249
load 251
+
dup
store 244
load 248
==
bz l36_localIfF
int 2
store 245
b l37_localIfK
l36_localIfF:
load 244
load 250
==
bz l38_localIfF
int 0
store 245
b l39_localIfK
l38_localIfF:
int 1
store 245
l39_localIfK:
l37_localIfK:
l35_localIfK:
load 255
load 254
itob
concat
load 253
concat
load 245
itob
global Round
itob
concat
load 252
itob
concat
b loopBody3
l33_afterHandler16:
// Handler 17
dup
int 17
==
bz l40_afterHandler17
pop
// check step
int 17
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
dup
int 112
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l41_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l41_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l42_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l40_afterHandler17:
int 0
assert
loopBody3:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
dup
extract 40 32
store 250
pop
load 255
int 1
==
bz l43_ifF
load 254
int 30
+
store 249
load 252
load 251
itob
concat
load 250
concat
load 253
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l43_ifF:
int 2
load 251
*
dup
bz l44_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 250
load 252
load 255
int 2
==
select
dig 1
gtxns Receiver
==
assert
l44_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l45_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v517",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v528",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v540",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v541",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v555",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v486",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v495",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v517",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v528",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v529",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v540",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v541",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v555",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v486",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v495",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b6138038062002b618339810160408190526200002691620001ee565b60008080556040805160208101909152908152604080518351815260208085015151908201527fcbe8b01c100825cba852556e4d2f014b5e636208419a4c3d83f7ef63111ab885910160405180910390a16020820151516200008c90341460076200011e565b62000099601e4362000290565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200010f92919062000148565b50504360035550620002f49050565b81620001445760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015690620002b7565b90600052602060002090601f0160209004810192826200017a5760008555620001c5565b82601f106200019557805160ff1916838001178555620001c5565b82800160010185558215620001c5579182015b82811115620001c5578251825591602001919060010190620001a8565b50620001d3929150620001d7565b5090565b5b80821115620001d35760008155600101620001d8565b60008183036040808212156200020357600080fd5b80518082016001600160401b0380821183831017156200023357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200024d57600080fd5b8351945060208501915084821081831117156200027a57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002cc57607f821691505b60208210811415620002ee57634e487b7160e01b600052602260045260246000fd5b50919050565b61285d80620003046000396000f3fe60806040526004361061010c5760003560e01c8063832307571161009a578063ba1beb0b11610061578063ba1beb0b14610242578063cee1228014610255578063eef2d6a514610268578063fc6727991461027b578063fd948b861461028e57005b806383230757146101d157806396ce2864146101e657806399de9a08146101f9578063ab53f2c61461020c578063b36fd5ee1461022f57005b80635626dd67116100de5780635626dd67146101725780637963168e146101855780637dbd13aa14610198578063804c93e8146101ab57806380f30ea8146101be57005b806318097157146101155780631e93b0f114610128578063213818ca1461014c5780634d4caf5a1461015f57005b3661011357005b005b610113610123366004612257565b6102a1565b34801561013457600080fd5b506003545b6040519081526020015b60405180910390f35b61011361015a366004612257565b61043c565b61011361016d366004612257565b6106d4565b61011361018036600461228c565b61090e565b610113610193366004612257565b610b7e565b6101136101a636600461228c565b610d07565b6101136101b9366004612257565b610f77565b6101136101cc366004612257565b6110f0565b3480156101dd57600080fd5b50600154610139565b6101136101f4366004612257565b611238565b610113610207366004612257565b611374565b34801561021857600080fd5b506102216114b3565b6040516101439291906122a8565b61011361023d366004612257565b611550565b610113610250366004612257565b611770565b610113610263366004612257565b6118ad565b610113610276366004612257565b611acb565b610113610289366004612257565b611c0b565b61011361029c366004612257565b611e2d565b6102b16007600054146022611fa6565b6102cb813515806102c457506001548235145b6023611fa6565b6000808055600280546102dd90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612305565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e919061238e565b90506103828160a001514310156024611fa6565b7fcb45a45ee9bcb249ed4da96abdd690031bae5a2fd5b002493e0c78610e7c126a826040516103b19190612422565b60405180910390a16103c534156020611fa6565b60408101516103e0906001600160a01b031633146021611fa6565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610421573d6000803e3d6000fd5b506000808055600181905561043890600290612117565b5050565b61044c6009600054146027611fa6565b6104668135158061045f57506001548235145b6028611fa6565b60008080556002805461047890612305565b80601f01602080910402602001604051908101604052809291908181526020018280546104a490612305565b80156104f15780601f106104c6576101008083540402835291602001916104f1565b820191906000526020600020905b8154815290600101906020018083116104d457829003601f168201915b5050505050806020019051810190610509919061244c565b90506105216040518060200160405280600081525090565b6105328260c0015143106029611fa6565b7f84ce231afb1acfcdbfc193bbd781bee803a8b0ea73c3dcbf09dfe8927253afd48360405161056191906124ea565b60405180910390a161057534156025611fa6565b6040820151610590906001600160a01b031633146026611fa6565b61059b601e43612519565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b6000554360015590516106a99183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906106cd929190612154565b5050505050565b6106e4600760005414601d611fa6565b6106fe813515806106f757506001548235145b601e611fa6565b60008080556002805461071090612305565b80601f016020809104026020016040519081016040528092919081815260200182805461073c90612305565b80156107895780601f1061075e57610100808354040283529160200191610789565b820191906000526020600020905b81548152906001019060200180831161076c57829003601f168201915b50505050508060200190518101906107a1919061238e565b90506107b96040518060200160405280600081525090565b6107ca8260a001514310601f611fa6565b7f08ed894918f0d78511d519b6d4e9941541ebd278410838325bfa2de5123f339d836040516107f991906124ea565b60405180910390a161080d3415601b611fa6565b8151610825906001600160a01b03163314601c611fa6565b610830601e43612519565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e0820152610100016106a9565b61091e600d60005414603c611fa6565b6109388135158061093157506001548235145b603d611fa6565b60008080556002805461094a90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461097690612305565b80156109c35780601f10610998576101008083540402835291602001916109c3565b820191906000526020600020905b8154815290600101906020018083116109a657829003601f168201915b50505050508060200190518101906109db91906125b8565b90506109f36040518060200160405280600081525090565b610a058261010001514310603e611fa6565b7f5a141e43101c23fb23d637f3b2477b187b2b9022a3d8dccabf85b6f6101dac1883604051610a3491906125d5565b60405180910390a1610a4834156039611fa6565b8151610a60906001600160a01b03163314603a611fa6565b60408051610aac91610a8691602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114603b611fa6565b610ab7601e43612519565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152600f6000554360015590516106a9918391016125f6565b610b8e6001600054146009611fa6565b610ba881351580610ba157506001548235145b600a611fa6565b600080805560028054610bba90612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610be690612305565b8015610c335780601f10610c0857610100808354040283529160200191610c33565b820191906000526020600020905b815481529060010190602001808311610c1657829003601f168201915b5050505050806020019051810190610c4b9190612663565b9050610c5e81604001514310600b611fa6565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d82604051610c8d9190612422565b60405180910390a1610ca6816020015134146008611fa6565b610cae6121d8565b815181516001600160a01b039091169052602080830180518351830152825133604090910152818301805160019052514392019190915251610cf09080612519565b602082015160400152610d0281611fcb565b505050565b610d17600f600054146047611fa6565b610d3181351580610d2a57506001548235145b6048611fa6565b600080805560028054610d4390612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6f90612305565b8015610dbc5780601f10610d9157610100808354040283529160200191610dbc565b820191906000526020600020905b815481529060010190602001808311610d9f57829003601f168201915b5050505050806020019051810190610dd491906125b8565b9050610dec6040518060200160405280600081525090565b610dfe82610100015143106049611fa6565b7f4418c103702389f8b89c548143734fe52fb48034e978bf355753893ac2ffb32c83604051610e2d91906125d5565b60405180910390a1610e4134156044611fa6565b8151610e59906001600160a01b031633146045611fa6565b60408051610ea591610e7f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360800151146046611fa6565b610eb0601e43612519565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e080870151918501919091528683013590840152835161010084015260116000554360015590516106a9918391016125f6565b610f87600b600054146036611fa6565b610fa181351580610f9a57506001548235145b6037611fa6565b600080805560028054610fb390612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdf90612305565b801561102c5780601f106110015761010080835404028352916020019161102c565b820191906000526020600020905b81548152906001019060200180831161100f57829003601f168201915b505050505080602001905181019061104491906126d2565b90506110588160e001514310156038611fa6565b7f8f2ed83e15c8d10f849617c526898f769c46e2fedb826317a6a1d1b65f6de345826040516110879190612422565b60405180910390a161109b34156034611fa6565b80516110b3906001600160a01b031633146035611fa6565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610421573d6000803e3d6000fd5b611100600d600054146041611fa6565b61111a8135158061111357506001548235145b6042611fa6565b60008080556002805461112c90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461115890612305565b80156111a55780601f1061117a576101008083540402835291602001916111a5565b820191906000526020600020905b81548152906001019060200180831161118857829003601f168201915b50505050508060200190518101906111bd91906125b8565b90506111d28161010001514310156043611fa6565b7ffbef84ddad4d5fd81b860e2812e49eda559c6fec7a4350b151b516656f4023c2826040516112019190612422565b60405180910390a16112153415603f611fa6565b6103e0336001600160a01b031682604001516001600160a01b0316146040611fa6565b611248600960005414602c611fa6565b6112628135158061125b57506001548235145b602d611fa6565b60008080556002805461127490612305565b80601f01602080910402602001604051908101604052809291908181526020018280546112a090612305565b80156112ed5780601f106112c2576101008083540402835291602001916112ed565b820191906000526020600020905b8154815290600101906020018083116112d057829003601f168201915b5050505050806020019051810190611305919061244c565b90506113198160c00151431015602e611fa6565b7f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d525826040516113489190612422565b60405180910390a161135c3415602a611fa6565b80516110b3906001600160a01b03163314602b611fa6565b6113846005600054146018611fa6565b61139e8135158061139757506001548235145b6019611fa6565b6000808055600280546113b090612305565b80601f01602080910402602001604051908101604052809291908181526020018280546113dc90612305565b80156114295780601f106113fe57610100808354040283529160200191611429565b820191906000526020600020905b81548152906001019060200180831161140c57829003601f168201915b5050505050806020019051810190611441919061277e565b90506114558160800151431015601a611fa6565b7f689557114e2e52e056e03b61e6c9aefd10ce977ec8f4368fb29885f113b07d2e826040516114849190612422565b60405180910390a161149834156016611fa6565b60408101516103e0906001600160a01b031633146017611fa6565b6000606060005460028080546114c890612305565b80601f01602080910402602001604051908101604052809291908181526020018280546114f490612305565b80156115415780601f1061151657610100808354040283529160200191611541565b820191906000526020600020905b81548152906001019060200180831161152457829003601f168201915b50505050509050915091509091565b611560600b600054146031611fa6565b61157a8135158061157357506001548235145b6032611fa6565b60008080556002805461158c90612305565b80601f01602080910402602001604051908101604052809291908181526020018280546115b890612305565b80156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b505050505080602001905181019061161d91906126d2565b90506116356040518060200160405280600081525090565b6116468260e0015143106033611fa6565b7f571f8ae075ff9607b3e2c26f81ffba4094dc38ca2d1e0f66bf941ab5e7feb1488360405161167591906124ea565b60405180910390a16116893415602f611fa6565b60408201516116a4906001600160a01b031633146030611fa6565b6116af601e43612519565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d6000554360015590516106a9918391016125f6565b6117806011600054146056611fa6565b61179a8135158061179357506001548235145b6057611fa6565b6000808055600280546117ac90612305565b80601f01602080910402602001604051908101604052809291908181526020018280546117d890612305565b80156118255780601f106117fa57610100808354040283529160200191611825565b820191906000526020600020905b81548152906001019060200180831161180857829003601f168201915b505050505080602001905181019061183d91906125b8565b90506118528161010001514310156058611fa6565b7f48e3389cc3885a726eed8a82b5b12905225d6527cb1ca7d9535854af70462d2e826040516118819190612422565b60405180910390a161189534156054611fa6565b80516110b3906001600160a01b031633146055611fa6565b6118bd6005600054146013611fa6565b6118d7813515806118d057506001548235145b6014611fa6565b6000808055600280546118e990612305565b80601f016020809104026020016040519081016040528092919081815260200182805461191590612305565b80156119625780601f1061193757610100808354040283529160200191611962565b820191906000526020600020905b81548152906001019060200180831161194557829003601f168201915b505050505080602001905181019061197a919061277e565b90506119926040518060200160405280600081525090565b6119a3826080015143106015611fa6565b7fb5f68330967194c85eebaf8de848d0571722cf52211ff80fb1ea5c866248c2aa836040516119d291906124ea565b60405180910390a16119e634156011611fa6565b81516119fe906001600160a01b031633146012611fa6565b611a09601e43612519565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e0016106a9565b611adb600f60005414604c611fa6565b611af581351580611aee57506001548235145b604d611fa6565b600080805560028054611b0790612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611b3390612305565b8015611b805780601f10611b5557610100808354040283529160200191611b80565b820191906000526020600020905b815481529060010190602001808311611b6357829003601f168201915b5050505050806020019051810190611b9891906125b8565b9050611bad816101000151431015604e611fa6565b7fc4d4f94621544e48f54cb125ce79f5eea9458260df2acadb2f6997ac7f4b2ae182604051611bdc9190612422565b60405180910390a1611bf03415604a611fa6565b60408101516103e0906001600160a01b03163314604b611fa6565b611c1b6011600054146051611fa6565b611c3581351580611c2e57506001548235145b6052611fa6565b600080805560028054611c4790612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611c7390612305565b8015611cc05780601f10611c9557610100808354040283529160200191611cc0565b820191906000526020600020905b815481529060010190602001808311611ca357829003601f168201915b5050505050806020019051810190611cd891906125b8565b9050611cf7604051806040016040528060008152602001600081525090565b611d0982610100015143106053611fa6565b7fa98f35a0d6b93a4c56a84ea7c61775169889bbc4a40928de026dea03dfe1e60883604051611d3891906124ea565b60405180910390a1611d4c3415604f611fa6565b8151611d64906001600160a01b031633146050611fa6565b8160a001518260e001511415611d7d5760018152611dca565b81608001518260c00151611d919190612519565b6020820181905260e08301511415611dac5760028152611dca565b8160a0015181602001511415611dc55760008152611dca565b600181525b611dd26121d8565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925283518184018051919091528051439201919091526060850151905190910152611e2781611fcb565b50505050565b611e3d600160005414600e611fa6565b611e5781351580611e5057506001548235145b600f611fa6565b600080805560028054611e6990612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9590612305565b8015611ee25780601f10611eb757610100808354040283529160200191611ee2565b820191906000526020600020905b815481529060010190602001808311611ec557829003601f168201915b5050505050806020019051810190611efa9190612663565b9050611f0e81604001514310156010611fa6565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d1582604051611f3d9190612422565b60405180910390a1611f513415600c611fa6565b8051611f69906001600160a01b03163314600d611fa6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610421573d6000803e3d6000fd5b816104385760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156120b257601e826020015160200151611ffd9190612519565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c090910190935280519192611e279260029290910190612154565b6020820151516002146120ca578151604001516120ce565b8151515b6001600160a01b03166108fc83600001516020015160026120ef9190612808565b6040518115909202916000818181858888f19350505050158015610421573d6000803e3d6000fd5b50805461212390612305565b6000825580601f10612133575050565b601f016020900490600052602060002090810190612151919061222a565b50565b82805461216090612305565b90600052602060002090601f01602090048101928261218257600085556121c8565b82601f1061219b57805160ff19168380011785556121c8565b828001600101855582156121c8579182015b828111156121c85782518255916020019190600101906121ad565b506121d492915061222a565b5090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161222560405180606001604052806000815260200160008152602001600081525090565b905290565b5b808211156121d4576000815560010161222b565b60006040828403121561225157600080fd5b50919050565b60006040828403121561226957600080fd5b612273838361223f565b9392505050565b60006060828403121561225157600080fd5b60006060828403121561229e57600080fd5b612273838361227a565b82815260006020604081840152835180604085015260005b818110156122dc578581018301518582016060015282016122c0565b818111156122ee576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061231957607f821691505b6020821081141561225157634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561236c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461238957600080fd5b919050565b600060c082840312156123a057600080fd5b60405160c0810181811067ffffffffffffffff821117156123d157634e487b7160e01b600052604160045260246000fd5b6040526123dd83612372565b8152602083015160208201526123f560408401612372565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b8135815260408101602083013580151580821461243e57600080fd5b806020850152505092915050565b600060e0828403121561245e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561248f57634e487b7160e01b600052604160045260246000fd5b60405261249b83612372565b8152602083015160208201526124b360408401612372565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b8135815260208083013590820152604081015b92915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561252c5761252c612503565b500190565b6000610120828403121561254457600080fd5b61254c61233a565b905061255782612372565b81526020820151602082015261256f60408301612372565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b600061012082840312156125cb57600080fd5b6122738383612531565b813581526020808301359082015260408083013590820152606081016124fd565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016124fd565b60006060828403121561267557600080fd5b6040516060810181811067ffffffffffffffff821117156126a657634e487b7160e01b600052604160045260246000fd5b6040526126b283612372565b815260208301516020820152604083015160408201528091505092915050565b60006101008083850312156126e657600080fd5b6040519081019067ffffffffffffffff8211818310171561271757634e487b7160e01b600052604160045260246000fd5b8160405261272484612372565b81526020840151602082015261273c60408501612372565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a0828403121561279057600080fd5b60405160a0810181811067ffffffffffffffff821117156127c157634e487b7160e01b600052604160045260246000fd5b6040526127cd83612372565b8152602083015160208201526127e560408401612372565b604082015260608301516060820152608083015160808201528091505092915050565b600081600019048311821515161561282257612822612503565b50029056fea2646970667358221220612dfe72354e31c828051b711f23cce8f8a87c6cfb2f9db5a94670e3047e23f864736f6c63430008090033`,
  BytecodeLen: 11105,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
