import CardCrook from "@/components/Root/CardCrook";
import FormForgotPassword from "@/components/Admin-Dashboard/FormForgotPassword";

export default function page() {
  return (
    <section id="admin-reset">
      <CardCrook className="mx-auto !w-full bg-red-500 font-monument lg:!w-1/2">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl lg:mt-16">Forgot Password</h3>
        <p className="mt-6 text-center">
          Masukkan alamat email yang terkait <br /> dengan akun admin kamu!
        </p>
        <FormForgotPassword />
      </CardCrook>
    </section>
  );
}
