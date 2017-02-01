<template>
    <div class='main-nav'>
        <div class='navbar navbar-inverse'>
            <div class='navbar-header'>
                <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                    <span class='sr-only'>Toggle navigation</span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                    <span class='icon-bar'></span>
                </button>
                <!--<a class='navbar-brand' [routerLink]="['/home']">IcDemoVue</a>-->
                <router-link to="/home" class='navbar-brand'>IcDemoVue</router-link>
            </div>
            <div class='clearfix'></div>
            <div class='navbar-collapse collapse'>
                <ul class='nav navbar-nav'>
                    <!--<li [routerLinkActive]="['link-active']">-->
                    <!--<li v-bind:class="{ 'active-class': 'router-link-active' }">-->
                    <!--
                        <a [routerLink]="['/home']">
                            <span class='glyphicon glyphicon-home'></span> Home
                        </a>
                    -->
                    <router-link tag="li" to="/home" style="float: none;">
                        <a>
                            <span class='glyphicon glyphicon-home'></span> Home
                        </a>
                    </router-link>
                    <router-link tag="li" to="/counter" style="float: none;">
                        <a>
                            <span class='glyphicon glyphicon-education'></span> Counter
                        </a>
                    </router-link>
                    <router-link tag="li" to="/fetch-data" style="float: none;">
                        <a>
                            <span class='glyphicon glyphicon-th-list'></span> Fetch data
                        </a>
                    </router-link>
                    <!--</li>-->
                    <!--
                    <li [routerLinkActive]="['link-active']">
                        <a [routerLink]="['/counter']">
                            <span class='glyphicon glyphicon-education'></span> Counter
                        </a>
                    </li>
                    <li [routerLinkActive]="['link-active']">
                        <a [routerLink]="['/fetch-data']">
                            <span class='glyphicon glyphicon-th-list'></span> Fetch data
                        </a>
                    </li>
                    -->
                </ul>
            </div>
        </div>
    </div>
</template>


