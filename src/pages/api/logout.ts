export const POST = async ({ cookies, redirect }) => {
  cookies.delete("admin_role", { path: "/" });
  cookies.delete("admin_username", { path: "/" });
  return redirect("/dashboard/login");
};
