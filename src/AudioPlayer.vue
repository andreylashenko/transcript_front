<template>
    <div class="record-list">

        <div class="row">
            <div class="col-2">Дата и время звонка</div>
            <div class="col-2">{{this.date}}</div>
        </div>
        <div class="row">
            <div class="col-2">Оператор</div>
            <div class="col-2">{{this.operatorName}}</div>
        </div>
        <div class="row">
            <div class="col-2">Клиент</div>
            <div class="col-2">{{this.clientName}}</div>
        </div>


        <button @click="play" class="btn btn-success">
            Play/Pause
        </button>
        <div :id="this.id" class="player"></div>


        <hr />
    </div>

</template>

<script>
    export default {
        name: "AudioPlayer",
        props: ['id', 'record', 'date', 'operatorName', 'clientName'],
        created () {
            this.$nextTick(() => {
                this.wavesurfer = WaveSurfer.create({
                    container: '#'+this.id,
                    waveColor: 'violet',
                    progressColor: 'purple'
                })
                this.wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
            })
        },
        methods: {
            play () {
                this.wavesurfer.playPause()
            }
        }
    }
</script>

<style scoped>

</style>
