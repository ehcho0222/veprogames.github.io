Vue.component("theme-select",{
    data: function()
    {
        return {
            themes: [["light.css", "Light"], ["dark.css", "Dark"], ["dark2.css", "Dark (Variation)"], ["darkblue.css", "Dark Blue"], ["highcontrast.css", "High Contrast"],
                ["terminal.css", "Terminal"], ["terminal2.css", "Light Terminal"], ["orange.css", "Orange"], ["chocolate.css", "Chocolate"], ["beautiful.css", "Beautiful (truly)"]]
        }
    },
    methods:{
        setTheme: theme => functions.setTheme(theme)
    },
    template: `<div class="theme-select">
<span>Theme</span>
<div class="selection">
    <button v-for="(t, i) in themes" @click="setTheme(t[0])" :key="i">{{t[1]}}</button>
</div>
</div>`
})