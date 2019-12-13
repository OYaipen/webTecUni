<template>
  <div>
    <navbar class="bg-dark" />
    <child />
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/NavbarDark";
import Footer from "~/components/Footer";
export default {
  name: "BasicLayout",
  components: {
    Navbar,
    Footer
  }
};
</script>