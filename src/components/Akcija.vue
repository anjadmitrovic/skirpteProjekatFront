<template>
  <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://thumbs.dreamstime.com/b/gold-sale-background-shine-backdrop-flyer-poster-shopping-sign-discount-marketing-selling-banner-web-header-abstract-golden-136099459.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Akcijska cena">
          <b-card-text>
            Ova ponuda vazi samo za tretmane sa sifrom {{ akcija.tretmanId }}. 
            Iskoristite ovu ponudu, iskombinujte više popusta i budite lepši za manje para. 
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
name:'akcija',
props:['akcija'],
}
</script>

<style>

</style>