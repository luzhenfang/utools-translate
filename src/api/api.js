/**
 * @author luckyFang
 * @date 2021-10-21
 *  有道翻译axios 请求
 */

import axios from 'axios';

// 有道翻译请求接口
/**
 * 
 * @param {*} word  请求单词
 * @returns  axios.get
 */
let youdaoDict = (word)=>{
    const res =  axios.get(`https://m.youdao.com/dict?le=eng&q=${word}`);

    return res;
}

export {youdaoDict};
