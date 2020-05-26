const signInHtml = `<div class="mt-2 mb-2" id="s-i-cli-ui">
<p class="text-primary text-center" id="s-i-form-head-ui">Welcome back</p>
<div class="dropdown-divider border  bg-dark"></div>
<div class="input-group flex-nowrap">
    <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Email" aria-label="Username"
        aria-describedby="addon-wrapping">
</div>
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
    else.</small>

<div class="dropdown-divider"></div>
<div class="input-group flex-nowrap">
    <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping"><i class="fas fa-key"></i></span>
    </div>
    <input type="text" class="form-control" placeholder="Password" aria-label="Password"
        aria-describedby="addon-wrapping">
</div>
<div class="mt-4 mb-3 align-middle pl-2" id="submit-oraction">
    <button type="submit" class="btn btn-primary">Submit</button>
    <span class="pl-1 pr-1">or use</span>
    <button type="submit" class="btn btn-danger">
        <span class="gg-icon border-right pr-3"><i class="fab fa-google"></i></span>
        <span class="gg-text pl-2">Google Account</span></button>
</div>
<div class="d-flex" id="small-text-redirect">
    <small class="ml-auto">You don't have account, 
    <span class="redirect-signin" id="redi-s-i-addr" onClick=SUFUNCTION()> Create one</span></small>
</div>
</div>`