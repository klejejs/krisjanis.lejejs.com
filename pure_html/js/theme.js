var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function initializeTheme(){
  syncBetweenTabs();
  listenToOSChanges();
  enableTheme(
    returnThemeBasedOnLocalStorage() ||
    "dark",
    // returnThemeBasedOnOS(),
    false);
}())

function syncBetweenTabs(){
    window.addEventListener('storage', (e) => {
        const root = document.documentElement;
        if (e.key === 'preference-theme'){
            if (e.newValue === 'light') enableTheme('light', false);
            else if (e.newValue === 'dark') enableTheme('dark', false);
        }
    })
}

function listenToOSChanges(){
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQueryList.addListener( (m)=> {
        const root = document.documentElement;
        if (m.matches !== true) {
            if (!root.classList.contains('theme-light')){
                enableTheme('light');
            }
        } else {
            if(!root.classList.contains('theme-dark')) enableTheme('dark');
        }
    })
}

function returnThemeBasedOnOS() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQueryList.matches) return 'dark';
    else {
        mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');
        if (mediaQueryList.matches) return 'light';
        else return undefined;
    }
}

function returnThemeBasedOnLocalStorage() {
    const pref = localStorage.getItem('preference-theme');

    if (pref === "light") return 'light';
    else if (pref === "dark") return 'dark';
    else return undefined;
}

function toggleTheme(){
    const root = document.documentElement;
    let currentTheme;
    root.classList.contains("theme-dark") ? (currentTheme = "dark") : "light";

    if (currentTheme == "dark") {
        enableTheme("light");
        document.getElementById("mode-color").innerHTML = "dark";
    } else {
        enableTheme("dark");
        document.getElementById("mode-color").innerHTML = "light";
    }
}

function enableTheme(newTheme = 'dark', save = true){
    const root = document.documentElement;
    let otherTheme = (newTheme === 'dark') ? 'light' : 'dark';
    let currentTheme = (root.classList.contains('theme-dark')) ? 'light' : 'dark';

    if (newTheme === 'dark') {
        document.getElementById("mode-color").innerHTML = "light";
    } else {
        document.getElementById("mode-color").innerHTML = "dark";
    }

    root.classList.add('theme-' + newTheme);
    root.classList.remove('theme-' + otherTheme);

    if (save) saveToLocalStorage('preference-theme', newTheme);
}

function saveToLocalStorage(key, value){
    localStorage.setItem(key, value);
}

}
/*
     FILE ARCHIVED ON 14:17:24 Nov 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:04:57 May 22, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 659.085
  exclusion.robots: 0.085
  exclusion.robots.policy: 0.075
  cdx.remote: 0.067
  esindex: 0.011
  LoadShardBlock: 613.848 (3)
  PetaboxLoader3.resolve: 666.571 (2)
  PetaboxLoader3.datanode: 82.722 (4)
  load_resource: 160.074
*/