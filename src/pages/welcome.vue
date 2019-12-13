<template>
  <div>
    <Header />
    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid rounded-circle" src="../assets/img/about/1.jpg" alt />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Nuestro mayor objetivo...</h2>
              <p>Es brindar un servicio personalizado cumpliendo óptimos niveles de Calidad, Seguridad industrial y cuidado del Medio Ambiente aplicando tecnología avanzada para lo cual contamos con un equipo de profesionales y técnicos altamente calificados con amplia experiencia en la industria en general, logrando finalmente servicios confiables, rentables y efectivos satisfaciendo en todo momento las necesidades de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services -->
    <section class="page-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Nuestros Servicios</h2>
            <h3
              class="section-subheading text-muted"
            >En base a la experiencia de los Profesionales que conforman Tecnología Universal estamos en la capacidad de intervenir en</h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-plug fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Departamento Eléctrico</h4>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Departamento de Automatización e Instrumentación</h4>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-cloud-meatball fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Departamento de Vapor y Electrimecánicos</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- Clients -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";

export default {
  layout: "default",
  components: {
    Header
  },
  metaInfo() {
    return { title: this.$t("home") };
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: "auth/check"
  })
};
</script>

