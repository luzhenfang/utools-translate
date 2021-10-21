console.log("preload js loaded")


utools.onPluginEnter(({ code, type, payload }) => {
    if (code == 'youdao') {
        utools.setSubInput(({ text }) => {
            this.text = text
        }, "客官搜点什么..");
        if (type == 'over') {
             utools.setSubInputValue(payload);
            console.log(payload);
            window.searchWord(payload);
        }
    }
});

document.onkeydown =(e)=>{
    if(!e) e=window.event;
    if(e.key == 'Enter') window.searchWord(this.text);
}