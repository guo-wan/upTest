<template>
    <el-container style="height: 100%">
        <el-header>
            <div class="header">
                <img src="../../assets/logo.png">
                <span>电商后台管理系统</span>
            </div>
            <div class="portrait">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <span>程家小卖铺</span>
            </div>
        </el-header>

        <el-container>

            <el-aside width="200px">
                <div style="background-color: #545454;line-height: 30px;text-align: center">|||</div>
                <el-menu
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router>
                    <el-submenu index="1">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <!--二级菜单-->
                        <el-menu-item index="/abc">
                            <i class="el-icon-menu"></i>
                            <span slot="title">二级</span>
                        </el-menu-item>
                        <el-menu-item index="/table">
                            <i class="el-icon-menu"></i>
                            <span slot="title">table</span>
                        </el-menu-item>

                    </el-submenu>
                    <!--<el-submenu index="2">
                        &lt;!&ndash;一级菜单模板&ndash;&gt;
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </template>
                        &lt;!&ndash;二级菜单&ndash;&gt;
                        <el-menu-item index="/qqq">
                            <i class="el-icon-menu"></i>
                            <span slot="title">二级</span>
                        </el-menu-item>

                    </el-submenu>-->
                    <el-submenu index="2">
                        <!--一级菜单模板-->
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </template>


                    </el-submenu>
                    <el-menu-item index="/qqq">
                        <i class="el-icon-menu"></i>
                        <span slot="title">三级</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {}
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between
    }

    .el-aside {
        background-color: #545c64;
        color: #333;
        /*line-height: 200px;*/
        height: 100%;
        .el-menu{
            border-right: none;
        }
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .header {
        display: flex;
        align-items: center;

        img {
            height: 60px;
        }
    }

    .portrait {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }


    /*菜单*/

</style>