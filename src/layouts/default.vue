<template>
  <div>
    <navbar />
    <child >
      <slot/>
    </child>
    <slider />
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  name: "MainLayout",
  components: {
    Navbar,
    Footer
  }
};
</script>