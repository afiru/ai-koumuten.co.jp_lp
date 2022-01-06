<?php if(is_page(array(11,14))): ?>

<div class="footer">
    <div class="display_flex_center footer_logo">
        <div class="footer_logo_wap">
            <figure class="footer_logo_fig ">
                <img src="<?php echo get_bloginfo('template_url'); ?>/img/footer_logo.svg" alt="アイ工務店フッターロゴ" width="" height="">
            </figure>
            <a class="footer_sns" href="https://www.instagram.com/aiminamiosaka/" target="_blank">
                <img src="<?php echo get_bloginfo('template_url'); ?>/img/icon_sns.svg" alt="Instagramアイコン" width="" height="">
            </a>
        </div>
    </div>
    <p class="t_center footer_privacy_link">
        <a class="button_footer_privacy_link" href="https://www.ai-koumuten.co.jp/privacy.html" target="_blank">プライバシーポリシー</a>
    </p>
    <p class="t_center footer_address">Copyright © 2010- AI-KOUMUTEN. All Rights Reserved.</p>
</div>
<?php else: ?>
<div class="footer">
    <p class="t_center footer_address">Copyright © 2010- AI-KOUMUTEN. All Rights Reserved.</p>
</div>
<?php endif; ?>
