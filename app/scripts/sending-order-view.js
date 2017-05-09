export default function sendingOrderView(store) {
    let $viewContent = $(`<section class="page-wrapper view-menu">
                            <header class="menu-header"><h1>Cafe le Blanc</h1></header>
                         </section>`);

    let $menuSection = $(`<section class="menu">
                            <h2>Sending order…</h2>
                        </section>`);

    $viewContent.append($menuSection);

    return $viewContent;
}
