// Source - https://stackoverflow.com/a/17909821
// Posted by curran, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-25, License - CC BY-SA 4.0

// KOMMENTAR: THE SOURCE is ONLY for the rgb function.

function rgb(r, g, b){
  return "rgb(" + r + ", " + g + ", " + b + ")"
}

function pixels(value){
    return value + "px"
}

const button_switch_light_text = document.querySelector('.switch_light_text')
const button_smaller_text = document.querySelector('.smaller_text')
const button_bigger_text = document.querySelector('.bigger_text')
const button_normal_text = document.querySelector('.normal_text')

const ringen_text = document.querySelector('.ringen_text')
const fast_text = document.querySelector('.fast_text')
const storst_av_allt_text = document.querySelector('.storst_av_allt_text')
const doden_text = document.querySelector('.doden_text')
const tystnaden = document.querySelector('.tystnaden_text')
const hej_herbert = document.querySelector('.herbert_text')

var storlek = 20

function change_text_light(text){
    if (!(button_switch_light_text)) {
        return;
    }
    if (!(text)) {
        return;
    }

    button_switch_light_text.addEventListener('click', () => {
        if (text.style.color !== rgb(200, 190, 190)) {
            text.style.color = rgb(200, 190, 190);
            button_switch_light_text.textContent = "Mörkare text";
        }
        else {
            text.style.color = rgb(185, 164, 164);
            button_switch_light_text.textContent = "Ljusare text";
        }
    })
}

function change_text_size(text){
    if (!(button_smaller_text) || !(button_bigger_text)) {
        return;
    }
    if (!(text)) {
        return;
    }

    button_smaller_text.addEventListener('click', () => {
        text.style.fontSize = pixels(storlek - 2);
        storlek = parseInt(getComputedStyle(text).fontSize);
        }
    )
    button_bigger_text.addEventListener('click', () => {
        text.style.fontSize = pixels(storlek + 2);
        storlek = parseInt(getComputedStyle(text).fontSize);
        }
    )
}

function set_normal(text){
    if (!(button_normal_text) || !(button_switch_light_text)) {
        return;
    }
    if (!(text)) {
        return;
    }

    button_normal_text.addEventListener('click', () => {
        text.style.fontSize = pixels(20)
        text.style.color = rgb(185, 164, 164);
        button_switch_light_text.textContent = "Ljusare text";
        storlek = parseInt(getComputedStyle(text).fontSize);
        }
    )
}

change_text_light(ringen_text)
change_text_light(fast_text)
change_text_light(storst_av_allt_text)
change_text_light(doden_text)
change_text_light(tystnaden)
change_text_light(hej_herbert)


change_text_size(ringen_text)
change_text_size(fast_text)
change_text_size(storst_av_allt_text)
change_text_size(doden_text)
change_text_size(tystnaden)
change_text_size(hej_herbert)


set_normal(ringen_text)
set_normal(fast_text)
set_normal(storst_av_allt_text)
set_normal(doden_text)
set_normal(tystnaden)
set_normal(hej_herbert)

//---------------------------------------------------------------------------------------------------



// Läs in text filer och visa som text
function load_text(text_file, class_name){
    fetch(text_file)
        .then(response => response.text())
        .then(text => {
            document.querySelector(class_name).textContent = text;
        })
}


load_text('ringen.txt', '.ringen_text')
load_text('fast.txt', '.fast_text')
load_text('storst_av_allt.txt', '.storst_av_allt_text')
load_text('doden.txt', '.doden_text')
load_text('tystnaden.txt', '.tystnaden_text')
load_text('hej_herbert.txt', '.herbert_text')