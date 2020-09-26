 <template>
 <div>
    <div class="row mt-3">
      <div class="col-7 my-auto">
        <div class="align-self-center">
          <router-link to="#" v-if="backbutton" class="btn btn-secondary btn-lg" role="button" aria-pressed="true">Atrás</router-link>
        </div>
      </div>
      <div class="col-5">
        <img class="img-fluid" src="@/assets/img/logo.png" alt="gym" />
      </div>
    </div>
    <hr />
 </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    backbutton: Boolean
  }
}
</script>