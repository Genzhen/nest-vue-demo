<template>
    <div class="container_body">
        <div class="body_info">
            <ul class="topicinfo">
                <template type="单选">
                    <li class="topicinfonum" id="subnum_1" v-if=" currentType === 'single_choice'">
                        <p>
                            <span class="subnum">1、</span>
                            <font>{{quesstionList[quesstionList['qtype']] && quesstionList[quesstionList['qtype']]['title']}}</font>
                            {{'00000'+ quesstionList['qtype']}}
                        </p>
                        <ul class="subchange">
                            <li v-for="(item,index) in (quesstionList[quesstionList['qtype']] && quesstionList[quesstionList['qtype']]['choice'])" class="subchangeli">
                                <input type="radio" :id="item.id" :value="item.id" v-model="selected" @change="showAnswer('single_choice')">
                                <label :for="item.id"></label>
                                <span class="singlespan">{{item.option}}</span>
                            </li>
                        </ul>
                        <div class=" bodykey  bodykey_1" v-show="showAnswerType === 'single_choice'">
                            <p class="keytitle">试题详解：</p>
                            <p>{{quesstionList[quesstionList['qtype']] &&  quesstionList[quesstionList['qtype']]['analysis']}}</p>
                        </div>
                        <button type="button" class="btn btn-primary btn-footer btnnextit" @click="getNextQuesstion()">
                            下一题
                        </button>
                    </li>
                </template>

                <template type="填空">
                    <li class="topicinfonum" id="subnum_5" v-if=" currentType === 'filling'">
                        <p>
                            <span class="subnum">5、</span>
                            <font>JavaScript中如何检测一个变量是一个String类型_______________请写出函数实现__________________。</font>
                        </p>
                        <div class="bodykeytwo  bodykey_5" v-show="showAnswerType === 'filling'">
                            <p class="keytitle">试题详解：</p>
                            <p>这里是解析答案，JavaScript中如何检测一个变量是一个String类型？请写出函数实现?</p>
                        </div>
                        <button type="button" class="btn btn- btn-footer btn-success  btngain" @click="showAnswer('filling')">
                            获取答案
                        </button>
                        <button type="button" class="btn btn-primary btn-footer btnnextit" @click="getNextQuesstion()">
                            下一题
                        </button>
                    </li>
                </template>

                <template type="多选">
                    <li class="topicinfonum" id="subnum_2" v-if=" currentType === 'multiple_choice'">
                        <p>
                            <span class="subnum">2、</span>
                            <font>你能描述一下渐进增强和优雅降级之间的不同吗?</font>
                        </p>
                        <ul class="subchange">
                            <li class="subchangeli">
                                <input type="radio" id="item2a" name="item" value="item1">
                                <label for="item2a"></label>
                                <span class="singlespan">优雅降级</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2b" name="item" value="item2">
                                <label for="item2b"></label>
                                <span class="singlespan">渐进增强</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2c" name="item" value="item3">
                                <label for="item2c"></label>
                                <span class="singlespan">优雅降级</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2d" name="item" value="item4">
                                <label for="item2d"></label>
                                <span class="singlespan">渐进增强</span>
                            </li>
                        </ul>
                        <div class="bodykey bodykey_2" v-show="showAnswerType === 'multiple_choice'">
                            <p>试题详解：</p>
                            <p>这里是解析答案，JavaScript中如何检测一个变量是一个String类型？请写出函数实现?</p>
                        </div>
                        <button type="button" class="btn btn-primary btn-footer btnnextit" data-toggle="button"
                                aria-pressed="false" autocomplete="off">
                            下一题
                        </button>
                    </li>
                </template>

                <template type="判断">
                    <li class="topicinfonum" id="subnum_3" v-if=" currentType === 'judgment'">
                        <p>
                            <span class="subnum">3、</span>
                            <font>JavaScript中如何检测一个变量是一个String类型？请写出函数实现?</font>
                        </p>
                        <ul class="subchange">
                            <li class="subchangeli">
                                <input type="radio" id="item1a" name="item1" value="使用replace正则匹配的方法">
                                <label for="item1a"></label>
                                <span class="singlespan">使用replace正则匹配的方法</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item1b" name="item1" value="使用str.trim()方法">
                                <label for="item1b"></label>
                                <span class="singlespan">使用str.trim()方法</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item1c" name="item1" value="使用jquery,$.trim(str)方法">
                                <label for="item1c"></label>
                                <span class="singlespan">使用jquery,$.trim(str)方法</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item1d" name="item1" value="使用jquery,$.trim(str)方法">
                                <label for="item1d"></label>
                                <span class="singlespan">使用jquery,$.trim(str)方法</span>
                            </li>
                        </ul>
                        <div class="bodykey bodykey_3">
                            <p>试题详解：</p>
                            <p>这里是解析答案，JavaScript中如何检测一个变量是一个String类型？请写出函数实现?</p>
                        </div>
                        <button type="button" class="btn btn-primary btn-footer btnnextit" data-toggle="button"
                                aria-pressed="false" autocomplete="off">
                            下一题
                        </button>
                    </li>
                </template>

                <template type="简答">
                    <li class="topicinfonum" id="subnum_4" v-if=" currentType === 'short_answer'">
                        <p>
                            <span class="subnum">4、</span>
                            <font>你能描述一下渐进增强和优雅降级之间的不同吗?</font>
                        </p>
                        <ul class="subchange">
                            <li class="subchangeli">
                                <input type="radio" id="item2a" name="item" value="item1">
                                <label for="item2a"></label>
                                <span class="singlespan">优雅降级</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2b" name="item" value="item2">
                                <label for="item2b"></label>
                                <span class="singlespan">渐进增强</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2c" name="item" value="item3">
                                <label for="item2c"></label>
                                <span class="singlespan">优雅降级</span>
                            </li>
                            <li class="subchangeli">
                                <input type="radio" id="item2d" name="item" value="item4">
                                <label for="item2d"></label>
                                <span class="singlespan">渐进增强</span>
                            </li>
                        </ul>
                        <div class="bodykey bodykey_4">
                            <p>试题详解：</p>
                            <p>这里是解析答案，JavaScript中如何检测一个变量是一个String类型？请写出函数实现?</p>
                        </div>
                        <button type="button" class="btn btn-primary btn-footer btnnextit">
                            下一题
                        </button>
                    </li>
                </template>

            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Content',
        data() {
            return {
                title: 'JavaScript中如何检测一个变量是一个String类型？请写出函数实现?',
                currentType: 'single_choice',
                showAnswerType: '',
                selected: '',
                quesstionList: {}
            }
        },
        methods: {
            showAnswer(answerType) {
                this.showAnswerType = answerType
            },
            getNextQuesstion(answerType) {
                this.currentType = 'filling'
            },
            getQuesstion(){
                const _this = this
                fetch('/cats', {
                    method: 'POST',
                    body: JSON.stringify({"uid": 123, "page": 1, "count": 10, "condition": []}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                  return res.json();
                })
                .then(res => {
                  console.log(333, res);
                })
                .catch(e => {
                  throw new Error(e);
                })

                // axios({
                //     method: "get",
                //     url: "/api/test",
                //     // url: "http://192.168.2.151:3000/exam/question/get",
                //     // url: "http://localhost:9999",
                //     data: 
                // }).then(function(response) {
                //     console.log(response);
                //     _this.quesstionList = response.data
                //     _this.currentType = response.data && response.data.qtype
                //     console.log('quesstionList', _this.quesstionList)
                // })
                //     .catch(function(error) {
                //         console.log(error);
                //     });
            }

        },
        mounted() {
            // 请求题目
            this.getQuesstion()
        }
    }
</script>

<style>

</style>