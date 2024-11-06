function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-4">
          <h1 className="pb-2 text-4xl tracking-tighter text-black lg:text-4xl">
            Podvelez Productivity
          </h1>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="input w-full max-w-xs bg-slate-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full max-w-xs bg-slate-200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
