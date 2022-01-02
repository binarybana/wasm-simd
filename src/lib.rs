#![no_std]

#[panic_handler]
fn handle_panic(_: &core::panic::PanicInfo) -> ! {
    loop {}
}

#[no_mangle]
pub extern "C" fn the_answer() -> u32 {
    use core::arch::wasm32::*;
    let x = i8x16_splat(44);
    i8x16_extract_lane::<3>(x) as u32
}
