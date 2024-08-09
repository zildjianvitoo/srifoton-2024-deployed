import CardCrook from "@/components/Root/CardCrook";
import FormResetPassword from "@/components/Auth/FormResetPassword";

export default function page() {
  return (
    <section id="forgot-password">
      <CardCrook className="mx-auto !w-full bg-red-500 font-monument lg:!w-1/2">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl lg:mt-16">Reset Password</h3>
        <p className="mt-6 text-center">
          Buat kata sandi baru kamu, sesuai <br /> ketentuan ya!
        </p>
        <FormResetPassword />
      </CardCrook>
    </section>
  );
}
