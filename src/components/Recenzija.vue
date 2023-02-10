<template>
   
    <div>
        <h5>Komentar: </h5>
        <p>
            {{ recenzija.komentar }}
        </p>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'recenzija',
    props:['recenzija'],
}

</script>