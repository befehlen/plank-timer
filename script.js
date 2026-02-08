if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        // Check for updates on load
        reg.update();
    });

    // Reload page when new service worker takes control (after update)
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
    });
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep(frequency, duration) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
    oscillator.stop(audioCtx.currentTime + duration);
}

const translations = {
    en: {
        title: "Simple Plank Timer",
        status_ready: "Are you ready?",
        desc_ready: "Press button to start",
        btn_start: "Start Workout",
        btn_restart: "Restart",
        progress: "Set: {current} / {total}",
        done_status: "Workout Complete!",
        done_time: "DONE",
        done_desc: "Great job!",
        next: "Next: {name}",
        end: "Finished",
        again: "Again {name}",
        settings_title: "Settings",
        label_sets: "Total Sets:",
        label_prep: "Prep/Change (sec):",
        label_plank: "Plank (sec):",
        label_side: "Side Plank (sec):",
        label_rest: "Rest (sec):",
        btn_cancel: "Cancel",
        btn_reset: "Reset",
        btn_save: "Save",
        step_prep: "Get Ready!",
        step_plank: "Plank",
        step_change_l: "Change (Left)",
        step_side_l: "Side Plank (L)",
        step_change_r: "Change (Right)",
        step_side_r: "Side Plank (R)",
        step_rest: "Rest"
    },
    ko: {
        title: "심플 플랭크 타이머",
        status_ready: "준비되셨나요?",
        desc_ready: "버튼을 누르면 시작합니다",
        btn_start: "운동 시작!",
        btn_restart: "다시 시작",
        progress: "현재 세트: {current} / {total}",
        done_status: "전체 루틴 완료!",
        done_time: "DONE",
        done_desc: "정말 대단하세요!",
        next: "다음: {name}",
        end: "운동 종료",
        again: "다시 {name}",
        settings_title: "설정",
        label_sets: "총 세트 수:",
        label_prep: "준비/자세 변경 (초):",
        label_plank: "일반 플랭크 (초):",
        label_side: "사이드 플랭크 (초):",
        label_rest: "세트 휴식 (초):",
        btn_cancel: "취소",
        btn_reset: "초기화",
        btn_save: "저장",
        step_prep: "준비 하세요!",
        step_plank: "일반 플랭크",
        step_change_l: "자세 변경(좌)",
        step_side_l: "사이드 플랭크(좌)",
        step_change_r: "자세 변경(우)",
        step_side_r: "사이드 플랭크(우)",
        step_rest: "세트 휴식"
    },
    ja: {
        title: "シンプルプランクタイマー",
        status_ready: "準備はいいですか？",
        desc_ready: "ボタンを押してスタート",
        btn_start: "スタート",
        btn_restart: "リスタート",
        progress: "セット: {current} / {total}",
        done_status: "完了しました！",
        done_time: "DONE",
        done_desc: "お疲れ様でした！",
        next: "次: {name}",
        end: "終了",
        again: "もう一度 {name}",
        settings_title: "設定",
        label_sets: "合計セット数:",
        label_prep: "準備/姿勢変更 (秒):",
        label_plank: "プランク (秒):",
        label_side: "サイドプランク (秒):",
        label_rest: "休憩 (秒):",
        btn_cancel: "キャンセル",
        btn_reset: "リセット",
        btn_save: "保存",
        step_prep: "準備！",
        step_plank: "プランク",
        step_change_l: "姿勢変更 (左)",
        step_side_l: "サイドプランク (左)",
        step_change_r: "姿勢変更 (右)",
        step_side_r: "サイドプランク (右)",
        step_rest: "休憩"
    },
    zh: {
        title: "简单平板支撑计时器",
        status_ready: "准备好了吗？",
        desc_ready: "按下按钮开始",
        btn_start: "开始锻炼",
        btn_restart: "重新开始",
        progress: "组数: {current} / {total}",
        done_status: "锻炼完成！",
        done_time: "DONE",
        done_desc: "干得好！",
        next: "下一步: {name}",
        end: "结束",
        again: "再次 {name}",
        settings_title: "设置",
        label_sets: "总组数:",
        label_prep: "准备/变换姿势 (秒):",
        label_plank: "平板支撑 (秒):",
        label_side: "侧平板支撑 (秒):",
        label_rest: "休息 (秒):",
        btn_cancel: "取消",
        btn_reset: "重置",
        btn_save: "保存",
        step_prep: "准备！",
        step_plank: "平板支撑",
        step_change_l: "变换姿势 (左)",
        step_side_l: "侧平板支撑 (左)",
        step_change_r: "变换姿势 (右)",
        step_side_r: "侧平板支撑 (右)",
        step_rest: "休息"
    },
    es: {
        title: "Temporizador de Plancha Simple",
        status_ready: "¿Estás listo?",
        desc_ready: "Presiona para comenzar",
        btn_start: "Comenzar",
        btn_restart: "Reiniciar",
        progress: "Serie: {current} / {total}",
        done_status: "¡Entrenamiento completo!",
        done_time: "HECHO",
        done_desc: "¡Buen trabajo!",
        next: "Siguiente: {name}",
        end: "Terminado",
        again: "Otra vez {name}",
        settings_title: "Configuración",
        label_sets: "Series totales:",
        label_prep: "Prep/Cambio (seg):",
        label_plank: "Plancha (seg):",
        label_side: "Plancha lateral (seg):",
        label_rest: "Descanso (seg):",
        btn_cancel: "Cancelar",
        btn_reset: "Reiniciar",
        btn_save: "Guardar",
        step_prep: "¡Preparados!",
        step_plank: "Plancha",
        step_change_l: "Cambio (Izq)",
        step_side_l: "Plancha lateral (Izq)",
        step_change_r: "Cambio (Der)",
        step_side_r: "Plancha lateral (Der)",
        step_rest: "Descanso"
    }
};

function getLanguage() {
    const lang = navigator.language.slice(0, 2);
    if (['ko', 'ja', 'zh', 'es'].includes(lang)) {
        return lang;
    }
    return 'en';
}

let currentLang = getLanguage();

function t(key, params = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

const defaultConfig = {
    totalSets: 3,
    routine: [
        { id: "step_prep", time: 5, color: "#f1c40f" },
        { id: "step_plank", time: 45, color: "#e94560" },
        { id: "step_change_l", time: 5, color: "#f1c40f" },
        { id: "step_side_l", time: 30, color: "#0984e3" },
        { id: "step_change_r", time: 5, color: "#f1c40f" },
        { id: "step_side_r", time: 30, color: "#0984e3" },
        { id: "step_rest", time: 60, color: "#4ecca3" }
    ]
};

let userConfig = JSON.parse(JSON.stringify(defaultConfig));
let currentSet = 1;
let stepIndex = 0;
let timeLeft = 0;
let timerInterval;
let isRunning = false;

function loadConfig() {
    const saved = localStorage.getItem('plankTimerConfig');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge saved config with default structure to ensure compatibility
            if (parsed.totalSets) userConfig.totalSets = parsed.totalSets;
            if (parsed.routine && Array.isArray(parsed.routine)) {
                userConfig.routine = parsed.routine;
            }
        } catch (e) {
            console.error("Failed to load config", e);
        }
    }
    updateUIWithConfig();
}

function updateUIWithConfig() {
    // Re-render UI text based on language
    document.title = t('title');
    document.getElementById('status').innerText = t('status_ready');
    document.getElementById('next-step').innerText = t('desc_ready');
    document.getElementById('start-btn').innerText = t('btn_start');
    document.getElementById('progress').innerText = t('progress', { current: 1, total: userConfig.totalSets }).split(':')[0] + ": " + userConfig.totalSets;


    // Update Settings Modal Labels
    document.querySelector('#settings-modal h2').innerText = t('settings_title');
    document.querySelector('label[for="setting-sets"]').innerText = t('label_sets');
    document.querySelector('.btn-cancel').innerText = t('btn_cancel');
    document.querySelector('.btn-reset').innerText = t('btn_reset');
    document.querySelector('.btn-save').innerText = t('btn_save');
}

function saveConfig() {
    localStorage.setItem('plankTimerConfig', JSON.stringify(userConfig));
}

function resetConfig() {
    if (confirm("Reset all settings?")) {
        userConfig = JSON.parse(JSON.stringify(defaultConfig));
        saveConfig();
        updateUIWithConfig();
        closeSettings();
    }
}

function openSettings() {
    if (isRunning) {
        alert("Cannot change settings while running.");
        return;
    }
    const modal = document.getElementById('settings-modal');
    modal.style.display = 'flex';

    document.getElementById('setting-sets').value = userConfig.totalSets;

    const routineContainer = document.getElementById('routine-settings');
    routineContainer.innerHTML = '';

    // Group 1: Prepare & Posture Change (indices 0, 2, 4)
    createSettingItem(routineContainer, t('label_prep'), "setting-prep", userConfig.routine[0].time);

    // Group 2: Regular Plank (index 1)
    createSettingItem(routineContainer, t('label_plank'), "setting-plank", userConfig.routine[1].time);

    // Group 3: Side Plank (indices 3, 5)
    createSettingItem(routineContainer, t('label_side'), "setting-side", userConfig.routine[3].time);

    // Group 4: Rest (index 6)
    createSettingItem(routineContainer, t('label_rest'), "setting-rest", userConfig.routine[6].time);
}

function createSettingItem(container, labelText, id, value) {
    const div = document.createElement('div');
    div.className = 'setting-item';
    div.innerHTML = `
            <label>${labelText}</label>
            <input type="number" id="${id}" value="${value}" min="1">
        `;
    container.appendChild(div);
}

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function saveSettings() {
    const newSets = parseInt(document.getElementById('setting-sets').value);
    if (newSets > 0) userConfig.totalSets = newSets;

    const prepTime = parseInt(document.getElementById('setting-prep').value);
    const plankTime = parseInt(document.getElementById('setting-plank').value);
    const sideTime = parseInt(document.getElementById('setting-side').value);
    const restTime = parseInt(document.getElementById('setting-rest').value);

    if (prepTime > 0) {
        userConfig.routine[0].time = prepTime;
        userConfig.routine[2].time = prepTime;
        userConfig.routine[4].time = prepTime;
    }
    if (plankTime > 0) userConfig.routine[1].time = plankTime;
    if (sideTime > 0) {
        userConfig.routine[3].time = sideTime;
        userConfig.routine[5].time = sideTime;
    }
    if (restTime > 0) userConfig.routine[6].time = restTime;

    saveConfig();
    updateUIWithConfig();
    closeSettings();
}

function initTimer() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    document.getElementById('start-btn').style.display = 'none';
    document.querySelector('.settings-btn').style.display = 'none'; // Hide settings during run
    isRunning = true;
    currentSet = 1;
    stepIndex = 0;
    runStep();
}

function runStep() {
    if (currentSet > userConfig.totalSets) {
        finishRoutine();
        return;
    }

    let current = userConfig.routine[stepIndex];
    timeLeft = current.time;

    document.getElementById('status').innerText = t(current.id);
    document.getElementById('status').style.color = current.color;
    document.getElementById('progress').innerText = t('progress', { current: currentSet, total: userConfig.totalSets });

    playBeep(440, 0.2);
    updateDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 3 && timeLeft > 0) playBeep(660, 0.05);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            stepIndex++;

            if (stepIndex >= userConfig.routine.length) {
                stepIndex = 1;
                currentSet++;
            }
            runStep();
        }
    }, 1000);
}

function finishRoutine() {
    document.getElementById('status').innerText = t('done_status');
    document.getElementById('time').innerText = t('done_time');
    document.getElementById('next-step').innerText = t('done_desc');
    playBeep(880, 0.5);
    document.getElementById('start-btn').innerText = t('btn_restart');
    document.getElementById('start-btn').style.display = 'inline-block';
    document.querySelector('.settings-btn').style.display = 'block';
    isRunning = false;
}

function updateDisplay() {
    document.getElementById('time').innerText = timeLeft < 10 ? "0" + timeLeft : timeLeft;
    let nextName;
    if (userConfig.routine[stepIndex + 1]) {
        nextName = t(userConfig.routine[stepIndex + 1].id);
        document.getElementById('next-step').innerText = t('next', { name: nextName });
    } else {
        if (currentSet >= userConfig.totalSets) {
            nextName = t('end');
            document.getElementById('next-step').innerText = t('next', { name: nextName });
        } else {
            nextName = t(userConfig.routine[1].id);
            document.getElementById('next-step').innerText = t('again', { name: nextName });
        }
    }
    document.getElementById('next-step').innerText = t('next', { name: nextName });
}

// Initialize
loadConfig();
